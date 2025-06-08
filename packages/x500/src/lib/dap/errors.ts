import type {
    AbandonedData,
} from "../modules/DirectoryAbstractService/AbandonedData.ta";
import type {
    AbandonFailedData,
} from "../modules/DirectoryAbstractService/AbandonFailedData.ta";
import type {
    AttributeErrorData,
} from "../modules/DirectoryAbstractService/AttributeErrorData.ta";
import {
    NameErrorData,
} from "../modules/DirectoryAbstractService/NameErrorData.ta";
import type {
    ReferralData,
} from "../modules/DirectoryAbstractService/ReferralData.ta";
import type {
    SecurityErrorData,
} from "../modules/DirectoryAbstractService/SecurityErrorData.ta";
import {
    ServiceErrorData,
} from "../modules/DirectoryAbstractService/ServiceErrorData.ta";
import {
    UpdateErrorData,
} from "../modules/DirectoryAbstractService/UpdateErrorData.ta";
import type {
    Code,
} from "../modules/CommonProtocolSpecification/Code.ta";
import {
    id_errcode_abandoned,
} from "../modules/CommonProtocolSpecification/id-errcode-abandoned.va";
import {
    id_errcode_abandonFailed,
} from "../modules/CommonProtocolSpecification/id-errcode-abandonFailed.va";
import {
    id_errcode_attributeError,
} from "../modules/CommonProtocolSpecification/id-errcode-attributeError.va";
import {
    id_errcode_nameError,
} from "../modules/CommonProtocolSpecification/id-errcode-nameError.va";
import {
    id_errcode_referral,
} from "../modules/CommonProtocolSpecification/id-errcode-referral.va";
import {
    id_errcode_securityError,
} from "../modules/CommonProtocolSpecification/id-errcode-securityError.va";
import {
    id_errcode_serviceError,
} from "../modules/CommonProtocolSpecification/id-errcode-serviceError.va";
import {
    id_errcode_updateError,
} from "../modules/CommonProtocolSpecification/id-errcode-updateError.va";

export
class AbandonError extends Error {
    public static readonly errcode: Code = id_errcode_abandoned;
    constructor (override readonly message: string, readonly data: AbandonedData) {
        super(message);
        Object.setPrototypeOf(this, AbandonError.prototype);
    }
}

export
class AbandonFailedError extends Error {
    public static readonly errcode: Code = id_errcode_abandonFailed;
    constructor (override readonly message: string, readonly data: AbandonFailedData) {
        super(message);
        Object.setPrototypeOf(this, AbandonFailedError.prototype);
    }
}

export
class AttributeError extends Error {
    public static readonly errcode: Code = id_errcode_attributeError;
    constructor (override readonly message: string, readonly data: AttributeErrorData) {
        super(message);
        Object.setPrototypeOf(this, AttributeError.prototype);
    }
}

export
class NameError extends Error {
    public static readonly errcode: Code = id_errcode_nameError;
    constructor (override readonly message: string, readonly data: NameErrorData) {
        super(message);
        Object.setPrototypeOf(this, NameError.prototype);
    }
}

export
class ReferralError extends Error {
    public static readonly errcode: Code = id_errcode_referral;
    constructor (override readonly message: string, readonly data: ReferralData) {
        super(message);
        Object.setPrototypeOf(this, ReferralError.prototype);
    }
}

export
class SecurityError extends Error {
    public static readonly errcode: Code = id_errcode_securityError;
    constructor (override readonly message: string, readonly data: SecurityErrorData) {
        super(message);
        Object.setPrototypeOf(this, SecurityError.prototype);
    }
}

export
class ServiceError extends Error {
    public static readonly errcode: Code = id_errcode_serviceError;
    constructor (override readonly message: string, readonly data: ServiceErrorData) {
        super(message);
        Object.setPrototypeOf(this, ServiceError.prototype);
    }
}

export
class UpdateError extends Error {
    public static readonly errcode: Code = id_errcode_updateError;
    constructor (override readonly message: string, readonly data: UpdateErrorData) {
        super(message);
        Object.setPrototypeOf(this, UpdateError.prototype);
    }
}

export
class UnknownOperationError extends Error {
    constructor (message?: string) {
        super(message ?? "Unknown operation.");
        Object.setPrototypeOf(this, UnknownOperationError.prototype);
    }
}
