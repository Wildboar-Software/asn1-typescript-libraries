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
import { IMSI, _decode_IMSI, _encode_IMSI } from "../MAP-CommonDataTypes/IMSI.ta.mjs";
// export { IMSI, _decode_IMSI, _encode_IMSI } from "../MAP-CommonDataTypes/IMSI.ta.mjs";
import { ISDN_AddressString, _decode_ISDN_AddressString, _encode_ISDN_AddressString } from "../MAP-CommonDataTypes/ISDN-AddressString.ta.mjs";
// export { ISDN_AddressString, _decode_ISDN_AddressString, _encode_ISDN_AddressString } from "../MAP-CommonDataTypes/ISDN-AddressString.ta.mjs";
import { SS_Code, _decode_SS_Code, _encode_SS_Code } from "../MAP-SS-Code/SS-Code.ta.mjs";
// export { SS_Code, _decode_SS_Code, _encode_SS_Code } from "../MAP-SS-Code/SS-Code.ta.mjs";
import { SS_EventSpecification, _decode_SS_EventSpecification, _encode_SS_EventSpecification } from "../MAP-SS-DataTypes/SS-EventSpecification.ta.mjs";
// export { SS_EventSpecification, _decode_SS_EventSpecification, _encode_SS_EventSpecification } from "../MAP-SS-DataTypes/SS-EventSpecification.ta.mjs";
import { ExtensionContainer, _decode_ExtensionContainer, _encode_ExtensionContainer } from "../MAP-ExtensionDataTypes/ExtensionContainer.ta.mjs";
// export { ExtensionContainer, _decode_ExtensionContainer, _encode_ExtensionContainer } from "../MAP-ExtensionDataTypes/ExtensionContainer.ta.mjs";
import { CCBS_RequestState, _enum_for_CCBS_RequestState, CCBS_RequestState_request /* IMPORTED_LONG_ENUMERATION_ITEM */, request /* IMPORTED_SHORT_ENUMERATION_ITEM */, CCBS_RequestState_recall /* IMPORTED_LONG_ENUMERATION_ITEM */, recall /* IMPORTED_SHORT_ENUMERATION_ITEM */, CCBS_RequestState_active /* IMPORTED_LONG_ENUMERATION_ITEM */, active /* IMPORTED_SHORT_ENUMERATION_ITEM */, CCBS_RequestState_completed /* IMPORTED_LONG_ENUMERATION_ITEM */, completed /* IMPORTED_SHORT_ENUMERATION_ITEM */, CCBS_RequestState_suspended /* IMPORTED_LONG_ENUMERATION_ITEM */, suspended /* IMPORTED_SHORT_ENUMERATION_ITEM */, CCBS_RequestState_frozen /* IMPORTED_LONG_ENUMERATION_ITEM */, frozen /* IMPORTED_SHORT_ENUMERATION_ITEM */, CCBS_RequestState_deleted /* IMPORTED_LONG_ENUMERATION_ITEM */, deleted /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_CCBS_RequestState, _encode_CCBS_RequestState } from "../MAP-SS-DataTypes/CCBS-RequestState.ta.mjs";
// export { CCBS_RequestState, _enum_for_CCBS_RequestState, CCBS_RequestState_request /* IMPORTED_LONG_ENUMERATION_ITEM */, request /* IMPORTED_SHORT_ENUMERATION_ITEM */, CCBS_RequestState_recall /* IMPORTED_LONG_ENUMERATION_ITEM */, recall /* IMPORTED_SHORT_ENUMERATION_ITEM */, CCBS_RequestState_active /* IMPORTED_LONG_ENUMERATION_ITEM */, active /* IMPORTED_SHORT_ENUMERATION_ITEM */, CCBS_RequestState_completed /* IMPORTED_LONG_ENUMERATION_ITEM */, completed /* IMPORTED_SHORT_ENUMERATION_ITEM */, CCBS_RequestState_suspended /* IMPORTED_LONG_ENUMERATION_ITEM */, suspended /* IMPORTED_SHORT_ENUMERATION_ITEM */, CCBS_RequestState_frozen /* IMPORTED_LONG_ENUMERATION_ITEM */, frozen /* IMPORTED_SHORT_ENUMERATION_ITEM */, CCBS_RequestState_deleted /* IMPORTED_LONG_ENUMERATION_ITEM */, deleted /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_CCBS_RequestState, _encode_CCBS_RequestState } from "../MAP-SS-DataTypes/CCBS-RequestState.ta.mjs";


/**
 * @summary SS_InvocationNotificationArg
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SS-InvocationNotificationArg ::= SEQUENCE {
 *     imsi    [0] IMSI,
 *     msisdn    [1] ISDN-AddressString,
 *     ss-Event    [2] SS-Code,
 *     -- The following SS-Code values are allowed :
 *     -- ect    SS-Code ::= '00110001'B
 *     -- multiPTY    SS-Code ::= '01010001'B
 *     -- cd    SS-Code ::= '00100100'B
 *     -- ccbs    SS-Code ::= '01000100'B
 *     ss-EventSpecification    [3] SS-EventSpecification    OPTIONAL,
 *     extensionContainer    [4] ExtensionContainer    OPTIONAL,
 *     ...,
 *     b-subscriberNumber    [5]    ISDN-AddressString    OPTIONAL,
 *     ccbs-RequestState    [6]    CCBS-RequestState    OPTIONAL
 *     }
 * ```
 * 
 * @class
 */
export
class SS_InvocationNotificationArg {
    constructor (
        /**
         * @summary `imsi`.
         * @public
         * @readonly
         */
        readonly imsi: IMSI,
        /**
         * @summary `msisdn`.
         * @public
         * @readonly
         */
        readonly msisdn: ISDN_AddressString,
        /**
         * @summary `ss_Event`.
         * @public
         * @readonly
         */
        readonly ss_Event: SS_Code,
        /**
         * @summary `ss_EventSpecification`.
         * @public
         * @readonly
         */
        readonly ss_EventSpecification: OPTIONAL<SS_EventSpecification>,
        /**
         * @summary `extensionContainer`.
         * @public
         * @readonly
         */
        readonly extensionContainer: OPTIONAL<ExtensionContainer>,
        /**
         * @summary `b_subscriberNumber`.
         * @public
         * @readonly
         */
        readonly b_subscriberNumber: OPTIONAL<ISDN_AddressString>,
        /**
         * @summary `ccbs_RequestState`.
         * @public
         * @readonly
         */
        readonly ccbs_RequestState: OPTIONAL<CCBS_RequestState>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a SS_InvocationNotificationArg
     * @description
     * 
     * This takes an `object` and converts it to a `SS_InvocationNotificationArg`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SS_InvocationNotificationArg`.
     * @returns {SS_InvocationNotificationArg}
     */
    public static _from_object (_o: { [_K in keyof (SS_InvocationNotificationArg)]: (SS_InvocationNotificationArg)[_K] }): SS_InvocationNotificationArg {
        return new SS_InvocationNotificationArg(_o.imsi, _o.msisdn, _o.ss_Event, _o.ss_EventSpecification, _o.extensionContainer, _o.b_subscriberNumber, _o.ccbs_RequestState, _o._unrecognizedExtensionsList);
    }

        /**
         * @summary The enum used as the type of the component `ccbs_RequestState`
         * @public
         * @static
         */

    public static _enum_for_ccbs_RequestState = _enum_for_CCBS_RequestState;
}

/**
 * @summary The Leading Root Component Types of SS_InvocationNotificationArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_SS_InvocationNotificationArg: $.ComponentSpec[] = [
    new $.ComponentSpec("imsi", false, $.hasTag(_TagClass.context, 0), undefined, undefined),
    new $.ComponentSpec("msisdn", false, $.hasTag(_TagClass.context, 1), undefined, undefined),
    new $.ComponentSpec("ss-Event", false, $.hasTag(_TagClass.context, 2), undefined, undefined),
    new $.ComponentSpec("ss-EventSpecification", true, $.hasTag(_TagClass.context, 3), undefined, undefined),
    new $.ComponentSpec("extensionContainer", true, $.hasTag(_TagClass.context, 4), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of SS_InvocationNotificationArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_SS_InvocationNotificationArg: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of SS_InvocationNotificationArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_SS_InvocationNotificationArg: $.ComponentSpec[] = [
    new $.ComponentSpec("b-subscriberNumber", true, $.hasTag(_TagClass.context, 5), undefined, undefined),
    new $.ComponentSpec("ccbs-RequestState", true, $.hasTag(_TagClass.context, 6), undefined, undefined)
];

let _cached_decoder_for_SS_InvocationNotificationArg: $.ASN1Decoder<SS_InvocationNotificationArg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SS_InvocationNotificationArg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SS_InvocationNotificationArg (el: _Element): SS_InvocationNotificationArg {
    if (!_cached_decoder_for_SS_InvocationNotificationArg) { _cached_decoder_for_SS_InvocationNotificationArg = function (el: _Element): SS_InvocationNotificationArg {
    let imsi!: IMSI;
    let msisdn!: ISDN_AddressString;
    let ss_Event!: SS_Code;
    let ss_EventSpecification: OPTIONAL<SS_EventSpecification>;
    let extensionContainer: OPTIONAL<ExtensionContainer>;
    let b_subscriberNumber: OPTIONAL<ISDN_AddressString>;
    let ccbs_RequestState: OPTIONAL<CCBS_RequestState>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "imsi": (_el: _Element): void => { imsi = $._decode_implicit<IMSI>(() => _decode_IMSI)(_el); },
        "msisdn": (_el: _Element): void => { msisdn = $._decode_implicit<ISDN_AddressString>(() => _decode_ISDN_AddressString)(_el); },
        "ss-Event": (_el: _Element): void => { ss_Event = $._decode_implicit<SS_Code>(() => _decode_SS_Code)(_el); },
        "ss-EventSpecification": (_el: _Element): void => { ss_EventSpecification = $._decode_implicit<SS_EventSpecification>(() => _decode_SS_EventSpecification)(_el); },
        "extensionContainer": (_el: _Element): void => { extensionContainer = $._decode_implicit<ExtensionContainer>(() => _decode_ExtensionContainer)(_el); },
        "b-subscriberNumber": (_el: _Element): void => { b_subscriberNumber = $._decode_implicit<ISDN_AddressString>(() => _decode_ISDN_AddressString)(_el); },
        "ccbs-RequestState": (_el: _Element): void => { ccbs_RequestState = $._decode_implicit<CCBS_RequestState>(() => _decode_CCBS_RequestState)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_SS_InvocationNotificationArg,
        _extension_additions_list_spec_for_SS_InvocationNotificationArg,
        _root_component_type_list_2_spec_for_SS_InvocationNotificationArg,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new SS_InvocationNotificationArg(
        imsi,
        msisdn,
        ss_Event,
        ss_EventSpecification,
        extensionContainer,
        b_subscriberNumber,
        ccbs_RequestState,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_SS_InvocationNotificationArg(el);
}

let _cached_encoder_for_SS_InvocationNotificationArg: $.ASN1Encoder<SS_InvocationNotificationArg> | null = null;

/**
 * @summary Encodes a(n) SS_InvocationNotificationArg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SS_InvocationNotificationArg, encoded as an ASN.1 Element.
 */
export
function _encode_SS_InvocationNotificationArg (value: SS_InvocationNotificationArg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SS_InvocationNotificationArg) { _cached_encoder_for_SS_InvocationNotificationArg = function (value: SS_InvocationNotificationArg, elGetter: $.ASN1Encoder<SS_InvocationNotificationArg>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_IMSI, $.BER)(value.imsi, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_ISDN_AddressString, $.BER)(value.msisdn, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_SS_Code, $.BER)(value.ss_Event, $.BER),
            /* IF_ABSENT  */ ((value.ss_EventSpecification === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_SS_EventSpecification, $.BER)(value.ss_EventSpecification, $.BER)),
            /* IF_ABSENT  */ ((value.extensionContainer === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => _encode_ExtensionContainer, $.BER)(value.extensionContainer, $.BER))
        ],
        [
            /* IF_ABSENT  */ ((value.b_subscriberNumber === undefined) ? undefined : $._encode_implicit(_TagClass.context, 5, () => _encode_ISDN_AddressString, $.BER)(value.b_subscriberNumber, $.BER)),
            /* IF_ABSENT  */ ((value.ccbs_RequestState === undefined) ? undefined : $._encode_implicit(_TagClass.context, 6, () => _encode_CCBS_RequestState, $.BER)(value.ccbs_RequestState, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_SS_InvocationNotificationArg(value, elGetter);
}


/* eslint-enable */
