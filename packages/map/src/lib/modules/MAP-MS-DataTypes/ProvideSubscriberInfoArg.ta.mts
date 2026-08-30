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
import { IMSI, _decode_IMSI, _encode_IMSI } from "../MAP-CommonDataTypes/IMSI.ta.mjs";
// export { IMSI, _decode_IMSI, _encode_IMSI } from "../MAP-CommonDataTypes/IMSI.ta.mjs";
import { LMSI, _decode_LMSI, _encode_LMSI } from "../MAP-CommonDataTypes/LMSI.ta.mjs";
// export { LMSI, _decode_LMSI, _encode_LMSI } from "../MAP-CommonDataTypes/LMSI.ta.mjs";
import { RequestedInfo, _decode_RequestedInfo, _encode_RequestedInfo } from "../MAP-MS-DataTypes/RequestedInfo.ta.mjs";
// export { RequestedInfo, _decode_RequestedInfo, _encode_RequestedInfo } from "../MAP-MS-DataTypes/RequestedInfo.ta.mjs";
import { ExtensionContainer, _decode_ExtensionContainer, _encode_ExtensionContainer } from "../MAP-ExtensionDataTypes/ExtensionContainer.ta.mjs";
// export { ExtensionContainer, _decode_ExtensionContainer, _encode_ExtensionContainer } from "../MAP-ExtensionDataTypes/ExtensionContainer.ta.mjs";
import { EMLPP_Priority, _decode_EMLPP_Priority, _encode_EMLPP_Priority } from "../MAP-CommonDataTypes/EMLPP-Priority.ta.mjs";
// export { EMLPP_Priority, _decode_EMLPP_Priority, _encode_EMLPP_Priority } from "../MAP-CommonDataTypes/EMLPP-Priority.ta.mjs";


/**
 * @summary ProvideSubscriberInfoArg
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ProvideSubscriberInfoArg ::= SEQUENCE {
 *     imsi    [0] IMSI,
 *     lmsi    [1] LMSI    OPTIONAL,
 *     requestedInfo    [2] RequestedInfo,
 *     extensionContainer    [3] ExtensionContainer    OPTIONAL,
 *     ...,
 *     callPriority    [4]    EMLPP-Priority    OPTIONAL
 *     }
 * ```
 * 
 * @class
 */
export
class ProvideSubscriberInfoArg {
    constructor (
        /**
         * @summary `imsi`.
         * @public
         * @readonly
         */
        readonly imsi: IMSI,
        /**
         * @summary `lmsi`.
         * @public
         * @readonly
         */
        readonly lmsi: OPTIONAL<LMSI>,
        /**
         * @summary `requestedInfo`.
         * @public
         * @readonly
         */
        readonly requestedInfo: RequestedInfo,
        /**
         * @summary `extensionContainer`.
         * @public
         * @readonly
         */
        readonly extensionContainer: OPTIONAL<ExtensionContainer>,
        /**
         * @summary `callPriority`.
         * @public
         * @readonly
         */
        readonly callPriority: OPTIONAL<EMLPP_Priority>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a ProvideSubscriberInfoArg
     * @description
     * 
     * This takes an `object` and converts it to a `ProvideSubscriberInfoArg`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ProvideSubscriberInfoArg`.
     * @returns {ProvideSubscriberInfoArg}
     */
    public static _from_object (_o: { [_K in keyof (ProvideSubscriberInfoArg)]: (ProvideSubscriberInfoArg)[_K] }): ProvideSubscriberInfoArg {
        return new ProvideSubscriberInfoArg(_o.imsi, _o.lmsi, _o.requestedInfo, _o.extensionContainer, _o.callPriority, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of ProvideSubscriberInfoArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ProvideSubscriberInfoArg: $.ComponentSpec[] = [
    new $.ComponentSpec("imsi", false, $.hasTag(_TagClass.context, 0), undefined, undefined),
    new $.ComponentSpec("lmsi", true, $.hasTag(_TagClass.context, 1), undefined, undefined),
    new $.ComponentSpec("requestedInfo", false, $.hasTag(_TagClass.context, 2), undefined, undefined),
    new $.ComponentSpec("extensionContainer", true, $.hasTag(_TagClass.context, 3), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of ProvideSubscriberInfoArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ProvideSubscriberInfoArg: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ProvideSubscriberInfoArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ProvideSubscriberInfoArg: $.ComponentSpec[] = [
    new $.ComponentSpec("callPriority", true, $.hasTag(_TagClass.context, 4), undefined, undefined)
];

let _cached_decoder_for_ProvideSubscriberInfoArg: $.ASN1Decoder<ProvideSubscriberInfoArg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ProvideSubscriberInfoArg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ProvideSubscriberInfoArg (el: _Element): ProvideSubscriberInfoArg {
    if (!_cached_decoder_for_ProvideSubscriberInfoArg) { _cached_decoder_for_ProvideSubscriberInfoArg = function (el: _Element): ProvideSubscriberInfoArg {
    let imsi!: IMSI;
    let lmsi: OPTIONAL<LMSI>;
    let requestedInfo!: RequestedInfo;
    let extensionContainer: OPTIONAL<ExtensionContainer>;
    let callPriority: OPTIONAL<EMLPP_Priority>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "imsi": (_el: _Element): void => { imsi = $._decode_implicit<IMSI>(() => _decode_IMSI)(_el); },
        "lmsi": (_el: _Element): void => { lmsi = $._decode_implicit<LMSI>(() => _decode_LMSI)(_el); },
        "requestedInfo": (_el: _Element): void => { requestedInfo = $._decode_implicit<RequestedInfo>(() => _decode_RequestedInfo)(_el); },
        "extensionContainer": (_el: _Element): void => { extensionContainer = $._decode_implicit<ExtensionContainer>(() => _decode_ExtensionContainer)(_el); },
        "callPriority": (_el: _Element): void => { callPriority = $._decode_implicit<EMLPP_Priority>(() => _decode_EMLPP_Priority)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ProvideSubscriberInfoArg,
        _extension_additions_list_spec_for_ProvideSubscriberInfoArg,
        _root_component_type_list_2_spec_for_ProvideSubscriberInfoArg,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new ProvideSubscriberInfoArg(
        imsi,
        lmsi,
        requestedInfo,
        extensionContainer,
        callPriority,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_ProvideSubscriberInfoArg(el);
}

let _cached_encoder_for_ProvideSubscriberInfoArg: $.ASN1Encoder<ProvideSubscriberInfoArg> | null = null;

/**
 * @summary Encodes a(n) ProvideSubscriberInfoArg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ProvideSubscriberInfoArg, encoded as an ASN.1 Element.
 */
export
function _encode_ProvideSubscriberInfoArg (value: ProvideSubscriberInfoArg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ProvideSubscriberInfoArg) { _cached_encoder_for_ProvideSubscriberInfoArg = function (value: ProvideSubscriberInfoArg, elGetter: $.ASN1Encoder<ProvideSubscriberInfoArg>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_IMSI, $.BER)(value.imsi, $.BER),
            /* IF_ABSENT  */ ((value.lmsi === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_LMSI, $.BER)(value.lmsi, $.BER)),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_RequestedInfo, $.BER)(value.requestedInfo, $.BER),
            /* IF_ABSENT  */ ((value.extensionContainer === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_ExtensionContainer, $.BER)(value.extensionContainer, $.BER))
        ],
        [
            /* IF_ABSENT  */ ((value.callPriority === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => _encode_EMLPP_Priority, $.BER)(value.callPriority, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_ProvideSubscriberInfoArg(value, elGetter);
}


/* eslint-enable */
