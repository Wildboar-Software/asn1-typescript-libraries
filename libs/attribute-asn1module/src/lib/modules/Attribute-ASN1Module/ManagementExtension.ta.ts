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
import * as $ from "asn1-ts/dist/node/functional";
import { DMI_EXTENSION } from "../Attribute-ASN1Module/DMI-EXTENSION.oca";
export { DMI_EXTENSION } from "../Attribute-ASN1Module/DMI-EXTENSION.oca";
import { ManagementExtensionSet } from "../Attribute-ASN1Module/ManagementExtensionSet.osa";
export { ManagementExtensionSet } from "../Attribute-ASN1Module/ManagementExtensionSet.osa";


/* START_OF_SYMBOL_DEFINITION ManagementExtension */
/**
 * @summary ManagementExtension
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ManagementExtension ::= SEQUENCE {
 *   identifier    DMI-EXTENSION.&id({ManagementExtensionSet}),
 *   significance  [1]  BOOLEAN DEFAULT FALSE,
 *   information
 *     [2]  DMI-EXTENSION.&Value({ManagementExtensionSet}{@.identifier})
 * }
 * ```
 * 
 * @class
 */
export
class ManagementExtension {
    constructor (
        /**
         * @summary `identifier`.
         * @public
         * @readonly
         */
        readonly identifier: OBJECT_IDENTIFIER,
        /**
         * @summary `significance`.
         * @public
         * @readonly
         */
        readonly significance: OPTIONAL<BOOLEAN>,
        /**
         * @summary `information`.
         * @public
         * @readonly
         */
        readonly information: _Element
    ) {}

    /**
     * @summary Restructures an object into a ManagementExtension
     * @description
     * 
     * This takes an `object` and converts it to a `ManagementExtension`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ManagementExtension`.
     * @returns {ManagementExtension}
     */
    public static _from_object (_o: { [_K in keyof (ManagementExtension)]: (ManagementExtension)[_K] }): ManagementExtension {
        return new ManagementExtension(_o.identifier, _o.significance, _o.information);
    }

    /**
     * @summary Getter that returns the default value for `significance`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_significance () { return false; }
}
/* END_OF_SYMBOL_DEFINITION ManagementExtension */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_ManagementExtension */
/**
 * @summary The Leading Root Component Types of ManagementExtension
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ManagementExtension: $.ComponentSpec[] = [
    new $.ComponentSpec("identifier", false, $.hasTag(_TagClass.universal, 6), undefined, undefined),
    new $.ComponentSpec("significance", true, $.hasTag(_TagClass.context, 1), undefined, undefined),
    new $.ComponentSpec("information", false, $.hasTag(_TagClass.context, 2), undefined, undefined)
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_ManagementExtension */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_ManagementExtension */
/**
 * @summary The Trailing Root Component Types of ManagementExtension
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ManagementExtension: $.ComponentSpec[] = [
    
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_ManagementExtension */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_ManagementExtension */
/**
 * @summary The Extension Addition Component Types of ManagementExtension
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ManagementExtension: $.ComponentSpec[] = [
    
];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_ManagementExtension */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ManagementExtension */
let _cached_decoder_for_ManagementExtension: $.ASN1Decoder<ManagementExtension> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ManagementExtension */

/* START_OF_SYMBOL_DEFINITION _decode_ManagementExtension */
/**
 * @summary Decodes an ASN.1 element into a(n) ManagementExtension
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ManagementExtension} The decoded data structure.
 */
export
function _decode_ManagementExtension (el: _Element) {
    if (!_cached_decoder_for_ManagementExtension) { _cached_decoder_for_ManagementExtension = function (el: _Element): ManagementExtension {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let identifier!: OBJECT_IDENTIFIER;
    let significance: OPTIONAL<BOOLEAN> = ManagementExtension._default_value_for_significance;
    let information!: _Element;
    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: $.DecodingMap = {
        "identifier": (_el: _Element): void => { identifier = $._decodeObjectIdentifier(_el); },
        "significance": (_el: _Element): void => { significance = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "information": (_el: _Element): void => { information = $._decode_implicit<_Element>(() => $._decodeAny)(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ManagementExtension,
        _extension_additions_list_spec_for_ManagementExtension,
        _root_component_type_list_2_spec_for_ManagementExtension,
        undefined,
    );
    return new ManagementExtension( /* SEQUENCE_CONSTRUCTOR_CALL */
        identifier,
        significance,
        information
    );
}; }
    return _cached_decoder_for_ManagementExtension(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ManagementExtension */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ManagementExtension */
let _cached_encoder_for_ManagementExtension: $.ASN1Encoder<ManagementExtension> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ManagementExtension */

/* START_OF_SYMBOL_DEFINITION _encode_ManagementExtension */
/**
 * @summary Encodes a(n) ManagementExtension into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ManagementExtension, encoded as an ASN.1 Element.
 */
export
function _encode_ManagementExtension (value: ManagementExtension, elGetter: $.ASN1Encoder<ManagementExtension>) {
    if (!_cached_encoder_for_ManagementExtension) { _cached_encoder_for_ManagementExtension = function (value: ManagementExtension, elGetter: $.ASN1Encoder<ManagementExtension>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encodeObjectIdentifier(value.identifier, $.BER),
            /* IF_DEFAULT */ (value.significance === undefined || $.deepEq(value.significance, ManagementExtension._default_value_for_significance) ? undefined : $._encode_implicit(_TagClass.context, 1, () => $._encodeBoolean, $.BER)(value.significance, $.BER)),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => $._encodeAny, $.BER)(value.information, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_ManagementExtension(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ManagementExtension */

/* eslint-enable */
