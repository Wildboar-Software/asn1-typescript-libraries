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
} from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";
import { AbsentSubscriberDiagnosticSM, _decode_AbsentSubscriberDiagnosticSM, _encode_AbsentSubscriberDiagnosticSM } from "../MAP-ER-DataTypes/AbsentSubscriberDiagnosticSM.ta.mjs";
// export { AbsentSubscriberDiagnosticSM, _decode_AbsentSubscriberDiagnosticSM, _encode_AbsentSubscriberDiagnosticSM } from "../MAP-ER-DataTypes/AbsentSubscriberDiagnosticSM.ta.mjs";
import { ExtensionContainer, _decode_ExtensionContainer, _encode_ExtensionContainer } from "../MAP-ExtensionDataTypes/ExtensionContainer.ta.mjs";
// export { ExtensionContainer, _decode_ExtensionContainer, _encode_ExtensionContainer } from "../MAP-ExtensionDataTypes/ExtensionContainer.ta.mjs";
import { IMSI, _decode_IMSI, _encode_IMSI } from "../MAP-CommonDataTypes/IMSI.ta.mjs";
// export { IMSI, _decode_IMSI, _encode_IMSI } from "../MAP-CommonDataTypes/IMSI.ta.mjs";
import { Time, _decode_Time, _encode_Time } from "../MAP-CommonDataTypes/Time.ta.mjs";
// export { Time, _decode_Time, _encode_Time } from "../MAP-CommonDataTypes/Time.ta.mjs";


/**
 * @summary AbsentSubscriberSM_Param
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AbsentSubscriberSM-Param ::= SEQUENCE {
 *     absentSubscriberDiagnosticSM    AbsentSubscriberDiagnosticSM    OPTIONAL,
 *     -- AbsentSubscriberDiagnosticSM can be either for non-GPRS 
 *     -- or for GPRS
 *     extensionContainer    ExtensionContainer    OPTIONAL,
 *     ...,
 *     additionalAbsentSubscriberDiagnosticSM     [0]    AbsentSubscriberDiagnosticSM    OPTIONAL,
 *     -- if received, additionalAbsentSubscriberDiagnosticSM 
 *     -- is for GPRS and absentSubscriberDiagnosticSM is 
 *     -- for non-GPRS
 *     imsi    [1] IMSI    OPTIONAL,
 *     -- when sent from HLR to IP-SM-GW, IMSI shall be present if UNRI is not set 
 *     -- to indicate that the absent condition is met for CS and PS but not for IMS. 
 *     requestedRetransmissionTime    [2] Time    OPTIONAL,
 *     userIdentifierAlert    [3] IMSI    OPTIONAL }
 * ```
 * 
 * @class
 */
export
class AbsentSubscriberSM_Param {
    constructor (
        /**
         * @summary `absentSubscriberDiagnosticSM`.
         * @public
         * @readonly
         */
        readonly absentSubscriberDiagnosticSM: OPTIONAL<AbsentSubscriberDiagnosticSM>,
        /**
         * @summary `extensionContainer`.
         * @public
         * @readonly
         */
        readonly extensionContainer: OPTIONAL<ExtensionContainer>,
        /**
         * @summary `additionalAbsentSubscriberDiagnosticSM`.
         * @public
         * @readonly
         */
        readonly additionalAbsentSubscriberDiagnosticSM: OPTIONAL<AbsentSubscriberDiagnosticSM>,
        /**
         * @summary `imsi`.
         * @public
         * @readonly
         */
        readonly imsi: OPTIONAL<IMSI>,
        /**
         * @summary `requestedRetransmissionTime`.
         * @public
         * @readonly
         */
        readonly requestedRetransmissionTime: OPTIONAL<Time>,
        /**
         * @summary `userIdentifierAlert`.
         * @public
         * @readonly
         */
        readonly userIdentifierAlert: OPTIONAL<IMSI>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a AbsentSubscriberSM_Param
     * @description
     * 
     * This takes an `object` and converts it to a `AbsentSubscriberSM_Param`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AbsentSubscriberSM_Param`.
     * @returns {AbsentSubscriberSM_Param}
     */
    public static _from_object (_o: { [_K in keyof (AbsentSubscriberSM_Param)]: (AbsentSubscriberSM_Param)[_K] }): AbsentSubscriberSM_Param {
        return new AbsentSubscriberSM_Param(_o.absentSubscriberDiagnosticSM, _o.extensionContainer, _o.additionalAbsentSubscriberDiagnosticSM, _o.imsi, _o.requestedRetransmissionTime, _o.userIdentifierAlert, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of AbsentSubscriberSM_Param
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_AbsentSubscriberSM_Param: $.ComponentSpec[] = [
    new $.ComponentSpec("absentSubscriberDiagnosticSM", true, $.hasTag(_TagClass.universal, 2), undefined, undefined),
    new $.ComponentSpec("extensionContainer", true, $.hasTag(_TagClass.universal, 16), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of AbsentSubscriberSM_Param
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_AbsentSubscriberSM_Param: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of AbsentSubscriberSM_Param
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_AbsentSubscriberSM_Param: $.ComponentSpec[] = [
    new $.ComponentSpec("additionalAbsentSubscriberDiagnosticSM", true, $.hasTag(_TagClass.context, 0), undefined, undefined),
    new $.ComponentSpec("imsi", true, $.hasTag(_TagClass.context, 1), undefined, undefined),
    new $.ComponentSpec("requestedRetransmissionTime", true, $.hasTag(_TagClass.context, 2), undefined, undefined),
    new $.ComponentSpec("userIdentifierAlert", true, $.hasTag(_TagClass.context, 3), undefined, undefined)
];

let _cached_decoder_for_AbsentSubscriberSM_Param: $.ASN1Decoder<AbsentSubscriberSM_Param> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AbsentSubscriberSM_Param
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AbsentSubscriberSM_Param (el: _Element): AbsentSubscriberSM_Param {
    if (!_cached_decoder_for_AbsentSubscriberSM_Param) { _cached_decoder_for_AbsentSubscriberSM_Param = function (el: _Element): AbsentSubscriberSM_Param {
    let absentSubscriberDiagnosticSM: OPTIONAL<AbsentSubscriberDiagnosticSM>;
    let extensionContainer: OPTIONAL<ExtensionContainer>;
    let additionalAbsentSubscriberDiagnosticSM: OPTIONAL<AbsentSubscriberDiagnosticSM>;
    let imsi: OPTIONAL<IMSI>;
    let requestedRetransmissionTime: OPTIONAL<Time>;
    let userIdentifierAlert: OPTIONAL<IMSI>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "absentSubscriberDiagnosticSM": (_el: _Element): void => { absentSubscriberDiagnosticSM = _decode_AbsentSubscriberDiagnosticSM(_el); },
        "extensionContainer": (_el: _Element): void => { extensionContainer = _decode_ExtensionContainer(_el); },
        "additionalAbsentSubscriberDiagnosticSM": (_el: _Element): void => { additionalAbsentSubscriberDiagnosticSM = $._decode_implicit<AbsentSubscriberDiagnosticSM>(() => _decode_AbsentSubscriberDiagnosticSM)(_el); },
        "imsi": (_el: _Element): void => { imsi = $._decode_implicit<IMSI>(() => _decode_IMSI)(_el); },
        "requestedRetransmissionTime": (_el: _Element): void => { requestedRetransmissionTime = $._decode_implicit<Time>(() => _decode_Time)(_el); },
        "userIdentifierAlert": (_el: _Element): void => { userIdentifierAlert = $._decode_implicit<IMSI>(() => _decode_IMSI)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_AbsentSubscriberSM_Param,
        _extension_additions_list_spec_for_AbsentSubscriberSM_Param,
        _root_component_type_list_2_spec_for_AbsentSubscriberSM_Param,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new AbsentSubscriberSM_Param(
        absentSubscriberDiagnosticSM,
        extensionContainer,
        additionalAbsentSubscriberDiagnosticSM,
        imsi,
        requestedRetransmissionTime,
        userIdentifierAlert,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_AbsentSubscriberSM_Param(el);
}

let _cached_encoder_for_AbsentSubscriberSM_Param: $.ASN1Encoder<AbsentSubscriberSM_Param> | null = null;

/**
 * @summary Encodes a(n) AbsentSubscriberSM_Param into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AbsentSubscriberSM_Param, encoded as an ASN.1 Element.
 */
export
function _encode_AbsentSubscriberSM_Param (value: AbsentSubscriberSM_Param, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AbsentSubscriberSM_Param) { _cached_encoder_for_AbsentSubscriberSM_Param = function (value: AbsentSubscriberSM_Param, elGetter: $.ASN1Encoder<AbsentSubscriberSM_Param>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.absentSubscriberDiagnosticSM === undefined) ? undefined : _encode_AbsentSubscriberDiagnosticSM(value.absentSubscriberDiagnosticSM, $.BER)),
            /* IF_ABSENT  */ ((value.extensionContainer === undefined) ? undefined : _encode_ExtensionContainer(value.extensionContainer, $.BER))
        ],
        [
            /* IF_ABSENT  */ ((value.additionalAbsentSubscriberDiagnosticSM === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_AbsentSubscriberDiagnosticSM, $.BER)(value.additionalAbsentSubscriberDiagnosticSM, $.BER)),
            /* IF_ABSENT  */ ((value.imsi === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_IMSI, $.BER)(value.imsi, $.BER)),
            /* IF_ABSENT  */ ((value.requestedRetransmissionTime === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_Time, $.BER)(value.requestedRetransmissionTime, $.BER)),
            /* IF_ABSENT  */ ((value.userIdentifierAlert === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_IMSI, $.BER)(value.userIdentifierAlert, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_AbsentSubscriberSM_Param(value, elGetter);
}


/* eslint-enable */
