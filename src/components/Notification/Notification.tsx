import React from 'react';
import cn from 'classnames';

type Props = {
  hasError: boolean,
  setHasError: (hasError: boolean) => void,
  errorMessage: string,
};

export const Notification: React.FC<Props> = React.memo(({
  hasError,
  setHasError,
  errorMessage,
}) => {
  return (
    <div
      className={cn(
        'notification is-danger is-light has-text-weight-normal',
        { hidden: !hasError },
      )}
    >
      {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
      <button
        type="button"
        className="delete"
        onClick={() => setHasError(false)}
      />

      {errorMessage}
    </div>
  );
});
