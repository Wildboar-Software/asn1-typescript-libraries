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
import { CorrelationID, _decode_CorrelationID, _encode_CorrelationID } from "../Core-INAP-CS1-DataTypes/CorrelationID.ta.mjs";
// export { CorrelationID, _decode_CorrelationID, _encode_CorrelationID } from "../Core-INAP-CS1-DataTypes/CorrelationID.ta.mjs";
import { IPAvailable, _decode_IPAvailable, _encode_IPAvailable } from "../Core-INAP-CS1-DataTypes/IPAvailable.ta.mjs";
// export { IPAvailable, _decode_IPAvailable, _encode_IPAvailable } from "../Core-INAP-CS1-DataTypes/IPAvailable.ta.mjs";
import { IPSSPCapabilities, _decode_IPSSPCapabilities, _encode_IPSSPCapabilities } from "../Core-INAP-CS1-DataTypes/IPSSPCapabilities.ta.mjs";
// export { IPSSPCapabilities, _decode_IPSSPCapabilities, _encode_IPSSPCapabilities } from "../Core-INAP-CS1-DataTypes/IPSSPCapabilities.ta.mjs";
import { ExtensionField, _decode_ExtensionField, _encode_ExtensionField } from "../Core-INAP-CS1-DataTypes/ExtensionField.ta.mjs";
// export { ExtensionField, _decode_ExtensionField, _encode_ExtensionField } from "../Core-INAP-CS1-DataTypes/ExtensionField.ta.mjs";


/**
 * @summary AssistRequestInstructionsArg
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AssistRequestInstructionsArg ::= SEQUENCE {
 *      correlationID     [0] CorrelationID,
 *      iPAvailable     [1] IPAvailable     OPTIONAL,
 *      iPSSPCapabilities     [2] IPSSPCapabilities     OPTIONAL,
 *      extensions     [3] SEQUENCE SIZE(1..numOfExtensions) OF ExtensionField     OPTIONAL
 * --  ...
 *      }
 * ```
 * 
 * @class
 */
export
class AssistRequestInstructionsArg {
    constructor (
        /**
         * @summary `correlationID`.
         * @public
         * @readonly
         */
        readonly correlationID: CorrelationID,
        /**
         * @summary `iPAvailable`.
         * @public
         * @readonly
         */
        readonly iPAvailable: OPTIONAL<IPAvailable>,
        /**
         * @summary `iPSSPCapabilities`.
         * @public
         * @readonly
         */
        readonly iPSSPCapabilities: OPTIONAL<IPSSPCapabilities>,
        /**
         * @summary `extensions`.
         * @public
         * @readonly
         */
        readonly extensions: OPTIONAL<ExtensionField[]>
    ) {}

    /**
     * @summary Restructures an object into a AssistRequestInstructionsArg
     * @description
     * 
     * This takes an `object` and converts it to a `AssistRequestInstructionsArg`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AssistRequestInstructionsArg`.
     * @returns {AssistRequestInstructionsArg}
     */
    public static _from_object (_o: { [_K in keyof (AssistRequestInstructionsArg)]: (AssistRequestInstructionsArg)[_K] }): AssistRequestInstructionsArg {
        return new AssistRequestInstructionsArg(_o.correlationID, _o.iPAvailable, _o.iPSSPCapabilities, _o.extensions);
    }


}

/**
 * @summary The Leading Root Component Types of AssistRequestInstructionsArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_AssistRequestInstructionsArg: $.ComponentSpec[] = [
    new $.ComponentSpec("correlationID", false, $.hasTag(_TagClass.context, 0), undefined, undefined),
    new $.ComponentSpec("iPAvailable", true, $.hasTag(_TagClass.context, 1), undefined, undefined),
    new $.ComponentSpec("iPSSPCapabilities", true, $.hasTag(_TagClass.context, 2), undefined, undefined),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.context, 3), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of AssistRequestInstructionsArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_AssistRequestInstructionsArg: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of AssistRequestInstructionsArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_AssistRequestInstructionsArg: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_AssistRequestInstructionsArg: $.ASN1Decoder<AssistRequestInstructionsArg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AssistRequestInstructionsArg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AssistRequestInstructionsArg (el: _Element): AssistRequestInstructionsArg {
    if (!_cached_decoder_for_AssistRequestInstructionsArg) { _cached_decoder_for_AssistRequestInstructionsArg = function (el: _Element): AssistRequestInstructionsArg {
    let correlationID!: CorrelationID;
    let iPAvailable: OPTIONAL<IPAvailable>;
    let iPSSPCapabilities: OPTIONAL<IPSSPCapabilities>;
    let extensions: OPTIONAL<ExtensionField[]>;
    const callbacks: $.DecodingMap = {
        "correlationID": (_el: _Element): void => { correlationID = $._decode_implicit<CorrelationID>(() => _decode_CorrelationID)(_el); },
        "iPAvailable": (_el: _Element): void => { iPAvailable = $._decode_implicit<IPAvailable>(() => _decode_IPAvailable)(_el); },
        "iPSSPCapabilities": (_el: _Element): void => { iPSSPCapabilities = $._decode_implicit<IPSSPCapabilities>(() => _decode_IPSSPCapabilities)(_el); },
        "extensions": (_el: _Element): void => { extensions = $._decode_implicit<ExtensionField[]>(() => $._decodeSequenceOf<ExtensionField>(() => _decode_ExtensionField))(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_AssistRequestInstructionsArg,
        _extension_additions_list_spec_for_AssistRequestInstructionsArg,
        _root_component_type_list_2_spec_for_AssistRequestInstructionsArg,
        undefined,
    );
    return new AssistRequestInstructionsArg(
        correlationID,
        iPAvailable,
        iPSSPCapabilities,
        extensions
    );
}; }
    return _cached_decoder_for_AssistRequestInstructionsArg(el);
}

let _cached_encoder_for_AssistRequestInstructionsArg: $.ASN1Encoder<AssistRequestInstructionsArg> | null = null;

/**
 * @summary Encodes a(n) AssistRequestInstructionsArg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AssistRequestInstructionsArg, encoded as an ASN.1 Element.
 */
export
function _encode_AssistRequestInstructionsArg (value: AssistRequestInstructionsArg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AssistRequestInstructionsArg) { _cached_encoder_for_AssistRequestInstructionsArg = function (value: AssistRequestInstructionsArg, elGetter: $.ASN1Encoder<AssistRequestInstructionsArg>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_CorrelationID, $.BER)(value.correlationID, $.BER),
            /* IF_ABSENT  */ ((value.iPAvailable === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_IPAvailable, $.BER)(value.iPAvailable, $.BER)),
            /* IF_ABSENT  */ ((value.iPSSPCapabilities === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_IPSSPCapabilities, $.BER)(value.iPSSPCapabilities, $.BER)),
            /* IF_ABSENT  */ ((value.extensions === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => $._encodeSequenceOf<ExtensionField>(() => _encode_ExtensionField, $.BER), $.BER)(value.extensions, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_AssistRequestInstructionsArg(value, elGetter);
}


/* eslint-enable */
