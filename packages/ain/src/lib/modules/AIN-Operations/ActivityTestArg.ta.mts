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
import { TransID, _decode_TransID, _encode_TransID } from "../AIN-Parameters/TransID.ta.mjs";
// export { TransID, _decode_TransID, _encode_TransID } from "../AIN-Parameters/TransID.ta.mjs";
import { ExtensionParameter, _decode_ExtensionParameter, _encode_ExtensionParameter } from "../AIN-Parameters/ExtensionParameter.ta.mjs";
// export { ExtensionParameter, _decode_ExtensionParameter, _encode_ExtensionParameter } from "../AIN-Parameters/ExtensionParameter.ta.mjs";


/**
 * @summary ActivityTestArg
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ActivityTestArg ::= SEQUENCE{
 *             transID                       TransID,
 *             extensionParameter            [84] IMPLICIT ExtensionParameter OPTIONAL
 *         }
 * ```
 * 
 * @class
 */
export
class ActivityTestArg {
    constructor (
        /**
         * @summary `transID`.
         * @public
         * @readonly
         */
        readonly transID: TransID,
        /**
         * @summary `extensionParameter`.
         * @public
         * @readonly
         */
        readonly extensionParameter: OPTIONAL<ExtensionParameter>
    ) {}

    /**
     * @summary Restructures an object into a ActivityTestArg
     * @description
     * 
     * This takes an `object` and converts it to a `ActivityTestArg`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ActivityTestArg`.
     * @returns {ActivityTestArg}
     */
    public static _from_object (_o: { [_K in keyof (ActivityTestArg)]: (ActivityTestArg)[_K] }): ActivityTestArg {
        return new ActivityTestArg(_o.transID, _o.extensionParameter);
    }


}

/**
 * @summary The Leading Root Component Types of ActivityTestArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ActivityTestArg: $.ComponentSpec[] = [
    new $.ComponentSpec("transID", false, $.hasTag(_TagClass.context, 163)),
    new $.ComponentSpec("extensionParameter", true, $.hasTag(_TagClass.context, 84))
];

/**
 * @summary The Trailing Root Component Types of ActivityTestArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ActivityTestArg: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ActivityTestArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ActivityTestArg: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ActivityTestArg: $.ASN1Decoder<ActivityTestArg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ActivityTestArg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ActivityTestArg (el: _Element): ActivityTestArg {
    if (!_cached_decoder_for_ActivityTestArg) { _cached_decoder_for_ActivityTestArg = function (el: _Element): ActivityTestArg {
    let transID!: TransID;
    let extensionParameter: OPTIONAL<ExtensionParameter>;
    const callbacks: $.DecodingMap = {
        "transID": (_el: _Element): void => { transID = _decode_TransID(_el); },
        "extensionParameter": (_el: _Element): void => { extensionParameter = $._decode_implicit<ExtensionParameter>(() => _decode_ExtensionParameter)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ActivityTestArg,
        _extension_additions_list_spec_for_ActivityTestArg,
        _root_component_type_list_2_spec_for_ActivityTestArg,
        undefined,
    );
    return new ActivityTestArg(
        transID,
        extensionParameter
    );
}; }
    return _cached_decoder_for_ActivityTestArg(el);
}

let _cached_encoder_for_ActivityTestArg: $.ASN1Encoder<ActivityTestArg> | null = null;

/**
 * @summary Encodes a(n) ActivityTestArg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ActivityTestArg, encoded as an ASN.1 Element.
 */
export
function _encode_ActivityTestArg (value: ActivityTestArg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ActivityTestArg) { _cached_encoder_for_ActivityTestArg = function (value: ActivityTestArg, elGetter: $.ASN1Encoder<ActivityTestArg>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_TransID(value.transID, $.BER),
            /* IF_ABSENT  */ ((value.extensionParameter === undefined) ? undefined : $._encode_implicit(_TagClass.context, 84, () => _encode_ExtensionParameter, $.BER)(value.extensionParameter, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_ActivityTestArg(value, elGetter);
}


/* eslint-enable */
