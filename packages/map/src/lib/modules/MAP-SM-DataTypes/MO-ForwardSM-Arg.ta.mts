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
import { SM_RP_DA, _decode_SM_RP_DA, _encode_SM_RP_DA } from "../MAP-SM-DataTypes/SM-RP-DA.ta.mjs";
// export { SM_RP_DA, _decode_SM_RP_DA, _encode_SM_RP_DA } from "../MAP-SM-DataTypes/SM-RP-DA.ta.mjs";
import { SM_RP_OA, _decode_SM_RP_OA, _encode_SM_RP_OA } from "../MAP-SM-DataTypes/SM-RP-OA.ta.mjs";
// export { SM_RP_OA, _decode_SM_RP_OA, _encode_SM_RP_OA } from "../MAP-SM-DataTypes/SM-RP-OA.ta.mjs";
import { SignalInfo, _decode_SignalInfo, _encode_SignalInfo } from "../MAP-CommonDataTypes/SignalInfo.ta.mjs";
// export { SignalInfo, _decode_SignalInfo, _encode_SignalInfo } from "../MAP-CommonDataTypes/SignalInfo.ta.mjs";
import { ExtensionContainer, _decode_ExtensionContainer, _encode_ExtensionContainer } from "../MAP-ExtensionDataTypes/ExtensionContainer.ta.mjs";
// export { ExtensionContainer, _decode_ExtensionContainer, _encode_ExtensionContainer } from "../MAP-ExtensionDataTypes/ExtensionContainer.ta.mjs";
import { IMSI, _decode_IMSI, _encode_IMSI } from "../MAP-CommonDataTypes/IMSI.ta.mjs";
// export { IMSI, _decode_IMSI, _encode_IMSI } from "../MAP-CommonDataTypes/IMSI.ta.mjs";
import { CorrelationID, _decode_CorrelationID, _encode_CorrelationID } from "../MAP-SM-DataTypes/CorrelationID.ta.mjs";
// export { CorrelationID, _decode_CorrelationID, _encode_CorrelationID } from "../MAP-SM-DataTypes/CorrelationID.ta.mjs";
import { SM_DeliveryOutcome, _enum_for_SM_DeliveryOutcome, SM_DeliveryOutcome_memoryCapacityExceeded /* IMPORTED_LONG_ENUMERATION_ITEM */, memoryCapacityExceeded /* IMPORTED_SHORT_ENUMERATION_ITEM */, SM_DeliveryOutcome_absentSubscriber /* IMPORTED_LONG_ENUMERATION_ITEM */, absentSubscriber /* IMPORTED_SHORT_ENUMERATION_ITEM */, SM_DeliveryOutcome_successfulTransfer /* IMPORTED_LONG_ENUMERATION_ITEM */, successfulTransfer /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_SM_DeliveryOutcome, _encode_SM_DeliveryOutcome } from "../MAP-SM-DataTypes/SM-DeliveryOutcome.ta.mjs";
// export { SM_DeliveryOutcome, _enum_for_SM_DeliveryOutcome, SM_DeliveryOutcome_memoryCapacityExceeded /* IMPORTED_LONG_ENUMERATION_ITEM */, memoryCapacityExceeded /* IMPORTED_SHORT_ENUMERATION_ITEM */, SM_DeliveryOutcome_absentSubscriber /* IMPORTED_LONG_ENUMERATION_ITEM */, absentSubscriber /* IMPORTED_SHORT_ENUMERATION_ITEM */, SM_DeliveryOutcome_successfulTransfer /* IMPORTED_LONG_ENUMERATION_ITEM */, successfulTransfer /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_SM_DeliveryOutcome, _encode_SM_DeliveryOutcome } from "../MAP-SM-DataTypes/SM-DeliveryOutcome.ta.mjs";


/**
 * @summary MO_ForwardSM_Arg
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MO-ForwardSM-Arg ::= SEQUENCE {
 *     sm-RP-DA    SM-RP-DA,
 *     sm-RP-OA    SM-RP-OA,
 *     sm-RP-UI    SignalInfo,
 *     extensionContainer    ExtensionContainer    OPTIONAL,
 *     ... ,
 *     imsi    IMSI    OPTIONAL,
 *     correlationID    [0] CorrelationID    OPTIONAL,
 *     sm-DeliveryOutcome    [1] SM-DeliveryOutcome    OPTIONAL
 *  }
 * ```
 * 
 * @class
 */
export
class MO_ForwardSM_Arg {
    constructor (
        /**
         * @summary `sm_RP_DA`.
         * @public
         * @readonly
         */
        readonly sm_RP_DA: SM_RP_DA,
        /**
         * @summary `sm_RP_OA`.
         * @public
         * @readonly
         */
        readonly sm_RP_OA: SM_RP_OA,
        /**
         * @summary `sm_RP_UI`.
         * @public
         * @readonly
         */
        readonly sm_RP_UI: SignalInfo,
        /**
         * @summary `extensionContainer`.
         * @public
         * @readonly
         */
        readonly extensionContainer: OPTIONAL<ExtensionContainer>,
        /**
         * @summary `imsi`.
         * @public
         * @readonly
         */
        readonly imsi: OPTIONAL<IMSI>,
        /**
         * @summary `correlationID`.
         * @public
         * @readonly
         */
        readonly correlationID: OPTIONAL<CorrelationID>,
        /**
         * @summary `sm_DeliveryOutcome`.
         * @public
         * @readonly
         */
        readonly sm_DeliveryOutcome: OPTIONAL<SM_DeliveryOutcome>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a MO_ForwardSM_Arg
     * @description
     * 
     * This takes an `object` and converts it to a `MO_ForwardSM_Arg`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `MO_ForwardSM_Arg`.
     * @returns {MO_ForwardSM_Arg}
     */
    public static _from_object (_o: { [_K in keyof (MO_ForwardSM_Arg)]: (MO_ForwardSM_Arg)[_K] }): MO_ForwardSM_Arg {
        return new MO_ForwardSM_Arg(_o.sm_RP_DA, _o.sm_RP_OA, _o.sm_RP_UI, _o.extensionContainer, _o.imsi, _o.correlationID, _o.sm_DeliveryOutcome, _o._unrecognizedExtensionsList);
    }

        /**
         * @summary The enum used as the type of the component `sm_DeliveryOutcome`
         * @public
         * @static
         */

    public static _enum_for_sm_DeliveryOutcome = _enum_for_SM_DeliveryOutcome;
}

/**
 * @summary The Leading Root Component Types of MO_ForwardSM_Arg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_MO_ForwardSM_Arg: $.ComponentSpec[] = [
    new $.ComponentSpec("sm-RP-DA", false, $.hasAnyTag, undefined, undefined),
    new $.ComponentSpec("sm-RP-OA", false, $.hasAnyTag, undefined, undefined),
    new $.ComponentSpec("sm-RP-UI", false, $.hasTag(_TagClass.universal, 4), undefined, undefined),
    new $.ComponentSpec("extensionContainer", true, $.hasTag(_TagClass.universal, 16), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of MO_ForwardSM_Arg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_MO_ForwardSM_Arg: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of MO_ForwardSM_Arg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_MO_ForwardSM_Arg: $.ComponentSpec[] = [
    new $.ComponentSpec("imsi", true, $.hasTag(_TagClass.universal, 4), undefined, undefined),
    new $.ComponentSpec("correlationID", true, $.hasTag(_TagClass.context, 0), undefined, undefined),
    new $.ComponentSpec("sm-DeliveryOutcome", true, $.hasTag(_TagClass.context, 1), undefined, undefined)
];

let _cached_decoder_for_MO_ForwardSM_Arg: $.ASN1Decoder<MO_ForwardSM_Arg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MO_ForwardSM_Arg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MO_ForwardSM_Arg (el: _Element): MO_ForwardSM_Arg {
    if (!_cached_decoder_for_MO_ForwardSM_Arg) { _cached_decoder_for_MO_ForwardSM_Arg = function (el: _Element): MO_ForwardSM_Arg {
    let sm_RP_DA!: SM_RP_DA;
    let sm_RP_OA!: SM_RP_OA;
    let sm_RP_UI!: SignalInfo;
    let extensionContainer: OPTIONAL<ExtensionContainer>;
    let imsi: OPTIONAL<IMSI>;
    let correlationID: OPTIONAL<CorrelationID>;
    let sm_DeliveryOutcome: OPTIONAL<SM_DeliveryOutcome>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "sm-RP-DA": (_el: _Element): void => { sm_RP_DA = _decode_SM_RP_DA(_el); },
        "sm-RP-OA": (_el: _Element): void => { sm_RP_OA = _decode_SM_RP_OA(_el); },
        "sm-RP-UI": (_el: _Element): void => { sm_RP_UI = _decode_SignalInfo(_el); },
        "extensionContainer": (_el: _Element): void => { extensionContainer = _decode_ExtensionContainer(_el); },
        "imsi": (_el: _Element): void => { imsi = _decode_IMSI(_el); },
        "correlationID": (_el: _Element): void => { correlationID = $._decode_implicit<CorrelationID>(() => _decode_CorrelationID)(_el); },
        "sm-DeliveryOutcome": (_el: _Element): void => { sm_DeliveryOutcome = $._decode_implicit<SM_DeliveryOutcome>(() => _decode_SM_DeliveryOutcome)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_MO_ForwardSM_Arg,
        _extension_additions_list_spec_for_MO_ForwardSM_Arg,
        _root_component_type_list_2_spec_for_MO_ForwardSM_Arg,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new MO_ForwardSM_Arg(
        sm_RP_DA,
        sm_RP_OA,
        sm_RP_UI,
        extensionContainer,
        imsi,
        correlationID,
        sm_DeliveryOutcome,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_MO_ForwardSM_Arg(el);
}

let _cached_encoder_for_MO_ForwardSM_Arg: $.ASN1Encoder<MO_ForwardSM_Arg> | null = null;

/**
 * @summary Encodes a(n) MO_ForwardSM_Arg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MO_ForwardSM_Arg, encoded as an ASN.1 Element.
 */
export
function _encode_MO_ForwardSM_Arg (value: MO_ForwardSM_Arg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MO_ForwardSM_Arg) { _cached_encoder_for_MO_ForwardSM_Arg = function (value: MO_ForwardSM_Arg, elGetter: $.ASN1Encoder<MO_ForwardSM_Arg>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_SM_RP_DA(value.sm_RP_DA, $.BER),
            /* REQUIRED   */ _encode_SM_RP_OA(value.sm_RP_OA, $.BER),
            /* REQUIRED   */ _encode_SignalInfo(value.sm_RP_UI, $.BER),
            /* IF_ABSENT  */ ((value.extensionContainer === undefined) ? undefined : _encode_ExtensionContainer(value.extensionContainer, $.BER))
        ],
        [
            /* IF_ABSENT  */ ((value.imsi === undefined) ? undefined : _encode_IMSI(value.imsi, $.BER)),
            /* IF_ABSENT  */ ((value.correlationID === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_CorrelationID, $.BER)(value.correlationID, $.BER)),
            /* IF_ABSENT  */ ((value.sm_DeliveryOutcome === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_SM_DeliveryOutcome, $.BER)(value.sm_DeliveryOutcome, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_MO_ForwardSM_Arg(value, elGetter);
}


/* eslint-enable */
