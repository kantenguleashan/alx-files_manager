import { ObjectId } from 'mongodb';

/**
 * Module with basic utilities
 */
const basicUtils = {
  /**
   * Checks if Mango Id is valid
   * @id {string|number} id to be evaluated
   * @return {boolean} true if valid, false if not
   */
  isValidId(id) {
    try {
      ObjectId(id);
    } catch (err) {
      return false;
    }
    return true;
  },
};

export default basicUtils;
