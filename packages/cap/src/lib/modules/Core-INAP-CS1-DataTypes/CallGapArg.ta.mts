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
import { GapCriteria, _decode_GapCriteria, _encode_GapCriteria } from "../Core-INAP-CS1-DataTypes/GapCriteria.ta.mjs";
// export { GapCriteria, _decode_GapCriteria, _encode_GapCriteria } from "../Core-INAP-CS1-DataTypes/GapCriteria.ta.mjs";
import { GapIndicators, _decode_GapIndicators, _encode_GapIndicators } from "../Core-INAP-CS1-DataTypes/GapIndicators.ta.mjs";
// export { GapIndicators, _decode_GapIndicators, _encode_GapIndicators } from "../Core-INAP-CS1-DataTypes/GapIndicators.ta.mjs";
import { ControlType, _enum_for_ControlType, ControlType_sCPOverloaded /* IMPORTED_LONG_ENUMERATION_ITEM */, sCPOverloaded /* IMPORTED_SHORT_ENUMERATION_ITEM */, ControlType_manuallyInitiated /* IMPORTED_LONG_ENUMERATION_ITEM */, manuallyInitiated /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ControlType, _encode_ControlType } from "../Core-INAP-CS1-DataTypes/ControlType.ta.mjs";
// export { ControlType, _enum_for_ControlType, ControlType_sCPOverloaded /* IMPORTED_LONG_ENUMERATION_ITEM */, sCPOverloaded /* IMPORTED_SHORT_ENUMERATION_ITEM */, ControlType_manuallyInitiated /* IMPORTED_LONG_ENUMERATION_ITEM */, manuallyInitiated /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ControlType, _encode_ControlType } from "../Core-INAP-CS1-DataTypes/ControlType.ta.mjs";
import { GapTreatment, _decode_GapTreatment, _encode_GapTreatment } from "../Core-INAP-CS1-DataTypes/GapTreatment.ta.mjs";
// export { GapTreatment, _decode_GapTreatment, _encode_GapTreatment } from "../Core-INAP-CS1-DataTypes/GapTreatment.ta.mjs";
import { ExtensionField, _decode_ExtensionField, _encode_ExtensionField } from "../Core-INAP-CS1-DataTypes/ExtensionField.ta.mjs";
// export { ExtensionField, _decode_ExtensionField, _encode_ExtensionField } from "../Core-INAP-CS1-DataTypes/ExtensionField.ta.mjs";


/**
 * @summary CallGapArg
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CallGapArg ::= SEQUENCE {
 *      gapCriteria     [0] GapCriteria,
 *      gapIndicators     [1] GapIndicators,
 *      controlType     [2] ControlType     OPTIONAL,
 *      gapTreatment     [3] GapTreatment     OPTIONAL,
 *      extensions     [4] SEQUENCE SIZE(1..numOfExtensions) OF ExtensionField     OPTIONAL
 * --  ...
 *      }
 * ```
 * 
 * @class
 */
export
class CallGapArg {
    constructor (
        /**
         * @summary `gapCriteria`.
         * @public
         * @readonly
         */
        readonly gapCriteria: GapCriteria,
        /**
         * @summary `gapIndicators`.
         * @public
         * @readonly
         */
        readonly gapIndicators: GapIndicators,
        /**
         * @summary `controlType`.
         * @public
         * @readonly
         */
        readonly controlType: OPTIONAL<ControlType>,
        /**
         * @summary `gapTreatment`.
         * @public
         * @readonly
         */
        readonly gapTreatment: OPTIONAL<GapTreatment>,
        /**
         * @summary `extensions`.
         * @public
         * @readonly
         */
        readonly extensions: OPTIONAL<ExtensionField[]>
    ) {}

    /**
     * @summary Restructures an object into a CallGapArg
     * @description
     * 
     * This takes an `object` and converts it to a `CallGapArg`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CallGapArg`.
     * @returns {CallGapArg}
     */
    public static _from_object (_o: { [_K in keyof (CallGapArg)]: (CallGapArg)[_K] }): CallGapArg {
        return new CallGapArg(_o.gapCriteria, _o.gapIndicators, _o.controlType, _o.gapTreatment, _o.extensions);
    }

        /**
         * @summary The enum used as the type of the component `controlType`
         * @public
         * @static
         */

    public static _enum_for_controlType = _enum_for_ControlType;
}

/**
 * @summary The Leading Root Component Types of CallGapArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_CallGapArg: $.ComponentSpec[] = [
    new $.ComponentSpec("gapCriteria", false, $.hasTag(_TagClass.context, 0), undefined, undefined),
    new $.ComponentSpec("gapIndicators", false, $.hasTag(_TagClass.context, 1), undefined, undefined),
    new $.ComponentSpec("controlType", true, $.hasTag(_TagClass.context, 2), undefined, undefined),
    new $.ComponentSpec("gapTreatment", true, $.hasTag(_TagClass.context, 3), undefined, undefined),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.context, 4), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of CallGapArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_CallGapArg: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of CallGapArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_CallGapArg: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_CallGapArg: $.ASN1Decoder<CallGapArg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CallGapArg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CallGapArg (el: _Element): CallGapArg {
    if (!_cached_decoder_for_CallGapArg) { _cached_decoder_for_CallGapArg = function (el: _Element): CallGapArg {
    let gapCriteria!: GapCriteria;
    let gapIndicators!: GapIndicators;
    let controlType: OPTIONAL<ControlType>;
    let gapTreatment: OPTIONAL<GapTreatment>;
    let extensions: OPTIONAL<ExtensionField[]>;
    const callbacks: $.DecodingMap = {
        "gapCriteria": (_el: _Element): void => { gapCriteria = $._decode_explicit<GapCriteria>(() => _decode_GapCriteria)(_el); },
        "gapIndicators": (_el: _Element): void => { gapIndicators = $._decode_implicit<GapIndicators>(() => _decode_GapIndicators)(_el); },
        "controlType": (_el: _Element): void => { controlType = $._decode_implicit<ControlType>(() => _decode_ControlType)(_el); },
        "gapTreatment": (_el: _Element): void => { gapTreatment = $._decode_explicit<GapTreatment>(() => _decode_GapTreatment)(_el); },
        "extensions": (_el: _Element): void => { extensions = $._decode_implicit<ExtensionField[]>(() => $._decodeSequenceOf<ExtensionField>(() => _decode_ExtensionField))(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_CallGapArg,
        _extension_additions_list_spec_for_CallGapArg,
        _root_component_type_list_2_spec_for_CallGapArg,
        undefined,
    );
    return new CallGapArg(
        gapCriteria,
        gapIndicators,
        controlType,
        gapTreatment,
        extensions
    );
}; }
    return _cached_decoder_for_CallGapArg(el);
}

let _cached_encoder_for_CallGapArg: $.ASN1Encoder<CallGapArg> | null = null;

/**
 * @summary Encodes a(n) CallGapArg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CallGapArg, encoded as an ASN.1 Element.
 */
export
function _encode_CallGapArg (value: CallGapArg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CallGapArg) { _cached_encoder_for_CallGapArg = function (value: CallGapArg, elGetter: $.ASN1Encoder<CallGapArg>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 0, () => _encode_GapCriteria, $.BER)(value.gapCriteria, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_GapIndicators, $.BER)(value.gapIndicators, $.BER),
            /* IF_ABSENT  */ ((value.controlType === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_ControlType, $.BER)(value.controlType, $.BER)),
            /* IF_ABSENT  */ ((value.gapTreatment === undefined) ? undefined : $._encode_explicit(_TagClass.context, 3, () => _encode_GapTreatment, $.BER)(value.gapTreatment, $.BER)),
            /* IF_ABSENT  */ ((value.extensions === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => $._encodeSequenceOf<ExtensionField>(() => _encode_ExtensionField, $.BER), $.BER)(value.extensions, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_CallGapArg(value, elGetter);
}


/* eslint-enable */
