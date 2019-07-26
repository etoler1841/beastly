import React, { useContext } from 'react'

import { AppContext } from '../../context/GlobalState'

const Actions = () => {
  const context = useContext(AppContext)
  const { creature } = context.detail

  const createHitText = hit =>
    `${hit.average} (${hit.roll.dice}${
      hit.roll.hasOwnProperty('modifier')
        ? hit.roll.modifier >= 0
          ? ` + ${hit.roll.modifier}`
          : ` ${hit.roll.modifier}`
        : ''
    }) ${hit.type}`

  const createActionBlock = action => (
    <div key={`${action.name}-${action.type}`} className="mb-2">
      <em>{action.type}:</em> {action.modifier >= 0 ? `+` : null}
      {action.modifier} to hit,{' '}
      {action.reach ? `reach ${action.reach} ft. ` : null}
      {action.range
        ? `range ${action.range.short}/${action.range.long} ft., `
        : null}
      {action.targets} target(s). Hit:{' '}
      {action.hit instanceof Array
        ? action.hit.map(hit => createHitText(hit)).join(', ')
        : createHitText(action.hit)}
      . {action.effect || null}
    </div>
  )

  return (
    <dl className="row mb-0">
      {creature.actions.map(action => (
        <React.Fragment key={action.name}>
          <dt className="col-2">{action.name}</dt>
          <dd className="col-10">
            {action.variants
              ? action.variants.map(variant => createActionBlock(variant))
              : createActionBlock(action)}
          </dd>
        </React.Fragment>
      ))}
    </dl>
  )
}

export default Actions
