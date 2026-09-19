/* eslint-disable */
import {
    itu_t,
    itu_r,
    ccitt,
    iso,
    joint_iso_itu_t,
    joint_iso_ccitt,
    OPTIONAL,
    BOOLEAN,
    INTEGER,
    BIT_STRING,
    OCTET_STRING,
    NULL,
    OBJECT_IDENTIFIER,
    ObjectDescriptor,
    EXTERNAL,
    REAL,
    INSTANCE_OF,
    ENUMERATED,
    EMBEDDED_PDV,
    UTF8String,
    RELATIVE_OID,
    SEQUENCE,
    SEQUENCE_OF,
    SET,
    SET_OF,
    GraphicString,
    NumericString,
    VisibleString,
    PrintableString,
    ISO646String,
    TeletexString,
    GeneralString,
    T61String,
    UniversalString,
    VideotexString,
    BMPString,
    IA5String,
    CharacterString,
    UTCTime,
    GeneralizedTime,
    TIME,
    DATE,
    TIME_OF_DAY,
    DATE_TIME,
    DURATION,
    OID_IRI,
    RELATIVE_OID_IRI,
    TRUE,
    FALSE,
    TRUE_BIT,
    FALSE_BIT,
    PLUS_INFINITY,
    MINUS_INFINITY,
    NOT_A_NUMBER,
    TYPE_IDENTIFIER,
    ABSTRACT_SYNTAX,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { EuiccPackageResult, _decode_EuiccPackageResult, _encode_EuiccPackageResult } from "../SGP32Definitions/EuiccPackageResult.ta.mjs";
// export { EuiccPackageResult, _decode_EuiccPackageResult, _encode_EuiccPackageResult } from "../SGP32Definitions/EuiccPackageResult.ta.mjs";
import { PendingNotificationList, _decode_PendingNotificationList, _encode_PendingNotificationList } from "../SGP32Definitions/PendingNotificationList.ta.mjs";
// export { PendingNotificationList, _decode_PendingNotificationList, _encode_PendingNotificationList } from "../SGP32Definitions/PendingNotificationList.ta.mjs";


/**
 * @summary EimPackageResult_ePRAndNotifications
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EimPackageResult-ePRAndNotifications ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @class
 */
export
class EimPackageResult_ePRAndNotifications {
    constructor (
        /**
         * @summary `euiccPackageResult`.
         * @public
         * @readonly
         */
        readonly euiccPackageResult: EuiccPackageResult,
        /**
         * @summary `notificationList`.
         * @public
         * @readonly
         */
        readonly notificationList: PendingNotificationList
    ) {}

    /**
     * @summary Restructures an object into a EimPackageResult_ePRAndNotifications
     * @description
     * 
     * This takes an `object` and converts it to a `EimPackageResult_ePRAndNotifications`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `EimPackageResult_ePRAndNotifications`.
     * @returns {EimPackageResult_ePRAndNotifications}
     */
    public static _from_object (_o: { [_K in keyof (EimPackageResult_ePRAndNotifications)]: (EimPackageResult_ePRAndNotifications)[_K] }): EimPackageResult_ePRAndNotifications {
        return new EimPackageResult_ePRAndNotifications(_o.euiccPackageResult, _o.notificationList);
    }


}

/**
 * @summary The Leading Root Component Types of EimPackageResult_ePRAndNotifications
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_EimPackageResult_ePRAndNotifications: $.ComponentSpec[] = [
    new $.ComponentSpec("euiccPackageResult", false, $.hasTag(_TagClass.context, 81)),
    new $.ComponentSpec("notificationList", false, $.hasTag(_TagClass.context, 0))
];

/**
 * @summary The Trailing Root Component Types of EimPackageResult_ePRAndNotifications
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_EimPackageResult_ePRAndNotifications: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of EimPackageResult_ePRAndNotifications
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_EimPackageResult_ePRAndNotifications: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_EimPackageResult_ePRAndNotifications: $.ASN1Decoder<EimPackageResult_ePRAndNotifications> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EimPackageResult_ePRAndNotifications
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EimPackageResult_ePRAndNotifications (el: _Element): EimPackageResult_ePRAndNotifications {
    if (!_cached_decoder_for_EimPackageResult_ePRAndNotifications) { _cached_decoder_for_EimPackageResult_ePRAndNotifications = function (el: _Element): EimPackageResult_ePRAndNotifications {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("EimPackageResult-ePRAndNotifications contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "euiccPackageResult";
    sequence[1].name = "notificationList";
    let euiccPackageResult!: EuiccPackageResult;
    let notificationList!: PendingNotificationList;
    euiccPackageResult = $._decode_implicit<EuiccPackageResult>(() => _decode_EuiccPackageResult)(sequence[0]);
    notificationList = $._decode_implicit<PendingNotificationList>(() => _decode_PendingNotificationList)(sequence[1]);
    return new EimPackageResult_ePRAndNotifications(
        euiccPackageResult,
        notificationList,

    );
}; }
    return _cached_decoder_for_EimPackageResult_ePRAndNotifications(el);
}

let _cached_encoder_for_EimPackageResult_ePRAndNotifications: $.ASN1Encoder<EimPackageResult_ePRAndNotifications> | null = null;

/**
 * @summary Encodes a(n) EimPackageResult_ePRAndNotifications into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EimPackageResult_ePRAndNotifications, encoded as an ASN.1 Element.
 */
export
function _encode_EimPackageResult_ePRAndNotifications (value: EimPackageResult_ePRAndNotifications, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EimPackageResult_ePRAndNotifications) { _cached_encoder_for_EimPackageResult_ePRAndNotifications = function (value: EimPackageResult_ePRAndNotifications, elGetter: $.ASN1Encoder<EimPackageResult_ePRAndNotifications>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 81, () => _encode_EuiccPackageResult, $.BER)(value.euiccPackageResult, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_PendingNotificationList, $.BER)(value.notificationList, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_EimPackageResult_ePRAndNotifications(value, elGetter);
}


/* eslint-enable */
