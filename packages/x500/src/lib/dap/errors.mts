import type {
    AbandonedData,
} from "../modules/DirectoryAbstractService/AbandonedData.ta.mjs";
import type {
    AbandonFailedData,
} from "../modules/DirectoryAbstractService/AbandonFailedData.ta.mjs";
import type {
    AttributeErrorData,
} from "../modules/DirectoryAbstractService/AttributeErrorData.ta.mjs";
import {
    NameErrorData,
} from "../modules/DirectoryAbstractService/NameErrorData.ta.mjs";
import type {
    ReferralData,
} from "../modules/DirectoryAbstractService/ReferralData.ta.mjs";
import type {
    SecurityErrorData,
} from "../modules/DirectoryAbstractService/SecurityErrorData.ta.mjs";
import {
    ServiceErrorData,
} from "../modules/DirectoryAbstractService/ServiceErrorData.ta.mjs";
import {
    UpdateErrorData,
} from "../modules/DirectoryAbstractService/UpdateErrorData.ta.mjs";
import type {
    Code,
} from "../modules/CommonProtocolSpecification/Code.ta.mjs";
import {
    id_errcode_abandoned,
} from "../modules/CommonProtocolSpecification/id-errcode-abandoned.va.mjs";
import {
    id_errcode_abandonFailed,
} from "../modules/CommonProtocolSpecification/id-errcode-abandonFailed.va.mjs";
import {
    id_errcode_attributeError,
} from "../modules/CommonProtocolSpecification/id-errcode-attributeError.va.mjs";
import {
    id_errcode_nameError,
} from "../modules/CommonProtocolSpecification/id-errcode-nameError.va.mjs";
import {
    id_errcode_referral,
} from "../modules/CommonProtocolSpecification/id-errcode-referral.va.mjs";
import {
    id_errcode_securityError,
} from "../modules/CommonProtocolSpecification/id-errcode-securityError.va.mjs";
import {
    id_errcode_serviceError,
} from "../modules/CommonProtocolSpecification/id-errcode-serviceError.va.mjs";
import {
    id_errcode_updateError,
} from "../modules/CommonProtocolSpecification/id-errcode-updateError.va.mjs";

/**
 * @summary Any X.500 directory error that has an associated ROSE error code
 */
export
interface X500DirectoryErrorCoded {
    /**
     * @summary Get the associated X.500 directory error code
     * @function
     * @returns {Code} the error code
     */
    error_code(): Code;
}

/**
 * @classdesc The X.500 directory `abandoned` error
 */
export
class AbandonError extends Error implements X500DirectoryErrorCoded {
    public static readonly errcode: Code = id_errcode_abandoned;
    constructor (override readonly message: string, readonly data: AbandonedData) {
        super(message);
        Object.setPrototypeOf(this, AbandonError.prototype);
    }
    public error_code(): Code {
        return AbandonError.errcode;
    }
}

/**
 * @classdesc The X.500 directory `abandonFailed` error
 */
export
class AbandonFailedError extends Error {
    public static readonly errcode: Code = id_errcode_abandonFailed;
    constructor (override readonly message: string, readonly data: AbandonFailedData) {
        super(message);
        Object.setPrototypeOf(this, AbandonFailedError.prototype);
    }
    public error_code(): Code {
        return AbandonFailedError.errcode;
    }
}

/**
 * @classdesc The X.500 directory `attributeError`
 */
export
class AttributeError extends Error {
    public static readonly errcode: Code = id_errcode_attributeError;
    constructor (override readonly message: string, readonly data: AttributeErrorData) {
        super(message);
        Object.setPrototypeOf(this, AttributeError.prototype);
    }
    public error_code(): Code {
        return AttributeError.errcode;
    }
}

/**
 * @classdesc The X.500 directory `nameError`
 */
export
class NameError extends Error {
    public static readonly errcode: Code = id_errcode_nameError;
    constructor (override readonly message: string, readonly data: NameErrorData) {
        super(message);
        Object.setPrototypeOf(this, NameError.prototype);
    }
    public error_code(): Code {
        return NameError.errcode;
    }
}

/**
 * @classdesc The X.500 directory `referral` "error"
 */
export
class ReferralError extends Error {
    public static readonly errcode: Code = id_errcode_referral;
    constructor (override readonly message: string, readonly data: ReferralData) {
        super(message);
        Object.setPrototypeOf(this, ReferralError.prototype);
    }
    public error_code(): Code {
        return ReferralError.errcode;
    }
}

/**
 * @classdesc The X.500 directory `securityError`
 */
export
class SecurityError extends Error {
    public static readonly errcode: Code = id_errcode_securityError;
    constructor (override readonly message: string, readonly data: SecurityErrorData) {
        super(message);
        Object.setPrototypeOf(this, SecurityError.prototype);
    }
    public error_code(): Code {
        return SecurityError.errcode;
    }
}

/**
 * @classdesc The X.500 directory `serviceError`
 */
export
class ServiceError extends Error {
    public static readonly errcode: Code = id_errcode_serviceError;
    constructor (override readonly message: string, readonly data: ServiceErrorData) {
        super(message);
        Object.setPrototypeOf(this, ServiceError.prototype);
    }
    public error_code(): Code {
        return ServiceError.errcode;
    }
}

/**
 * @classdesc The X.500 directory `updateError`
 */
export
class UpdateError extends Error {
    public static readonly errcode: Code = id_errcode_updateError;
    constructor (override readonly message: string, readonly data: UpdateErrorData) {
        super(message);
        Object.setPrototypeOf(this, UpdateError.prototype);
    }
    public error_code(): Code {
        return UpdateError.errcode;
    }
}

/**
 * @classdesc The Remote Operation Service Element (ROSE) `unknownOperationRequest` rejection
 */
export
class UnknownOperationError extends Error {
    constructor (message?: string) {
        super(message ?? "Unknown operation.");
        Object.setPrototypeOf(this, UnknownOperationError.prototype);
    }
}
