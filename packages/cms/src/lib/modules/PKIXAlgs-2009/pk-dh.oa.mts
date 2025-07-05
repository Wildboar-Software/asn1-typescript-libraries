/* eslint-disable */
import {
    inheritable /* IMPORTED_SHORT_ENUMERATION_ITEM */,
} from "../AlgorithmInformation-2009/ParamOptions.ta.mjs";
import { type PUBLIC_KEY } from "../AlgorithmInformation-2009/PUBLIC-KEY.oca.mjs";
import {
    DHPublicKey,
    _decode_DHPublicKey,
    _encode_DHPublicKey,
} from "../PKIXAlgs-2009/DHPublicKey.ta.mjs";
import { dhpublicnumber } from "../PKIXAlgs-2009/dhpublicnumber.va.mjs";
import {
    DomainParameters,
    _decode_DomainParameters,
    _encode_DomainParameters,
} from "../PKIXAlgs-2009/DomainParameters.ta.mjs";

/**
 * @summary pk_dh
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * pk-dh PUBLIC-KEY ::= {
 * IDENTIFIER dhpublicnumber
 * KEY DHPublicKey
 * PARAMS TYPE DomainParameters ARE inheritable
 * -- Private key format not in this module --
 * CERT-KEY-USAGE {keyAgreement, encipherOnly, decipherOnly }
 * }
 * ```
 *
 * @constant
 * @type {PUBLIC_KEY<DHPublicKey, DomainParameters>}
 * @implements {PUBLIC_KEY<DHPublicKey, DomainParameters>}
 */
export const pk_dh: PUBLIC_KEY<DHPublicKey, DomainParameters> = {
    class: "PUBLIC-KEY",
    decoderFor: {
        "&KeyValue": _decode_DHPublicKey,
        "&Params": _decode_DomainParameters,
        "&PrivateKey": undefined,
    },
    encoderFor: {
        "&KeyValue": _encode_DHPublicKey,
        "&Params": _encode_DomainParameters,
        "&PrivateKey": undefined,
    },
    "&id": dhpublicnumber /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&paramPresence": inheritable /* OBJECT_FIELD_SETTING */,
    "&keyUsage": undefined,
    "&KeyValue": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&Params": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&PrivateKey": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
