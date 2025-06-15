/* eslint-disable */
import {
    absent /* IMPORTED_SHORT_ENUMERATION_ITEM */,
} from "../AlgorithmInformation-2009/ParamOptions.ta.mjs";
import { PUBLIC_KEY } from "../AlgorithmInformation-2009/PUBLIC-KEY.oca.mjs";
import { dh_public_number } from "../CryptographicMessageSyntaxAlgorithms-2009/dh-public-number.va.mjs";
import {
    DHPublicKey,
    _decode_DHPublicKey,
    _encode_DHPublicKey,
} from "../PKIXAlgs-2009/DHPublicKey.ta.mjs";

/**
 * @summary pk_originator_dh
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * pk-originator-dh PUBLIC-KEY ::= {
 * IDENTIFIER dh-public-number
 * KEY DHPublicKey
 * PARAMS ARE absent
 * CERT-KEY-USAGE {keyAgreement, encipherOnly, decipherOnly}
 * }
 * ```
 *
 * @constant
 * @type {PUBLIC_KEY<DHPublicKey>}
 * @implements {PUBLIC_KEY<DHPublicKey>}
 */
export const pk_originator_dh: PUBLIC_KEY<DHPublicKey> = {
    class: "PUBLIC-KEY",
    decoderFor: {
        "&KeyValue": _decode_DHPublicKey,
        "&Params": undefined,
        "&PrivateKey": undefined,
    },
    encoderFor: {
        "&KeyValue": _encode_DHPublicKey,
        "&Params": undefined,
        "&PrivateKey": undefined,
    },
    "&id": dh_public_number /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&paramPresence": absent /* OBJECT_FIELD_SETTING */,
    "&keyUsage": undefined,
    "&KeyValue": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&Params": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&PrivateKey": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
