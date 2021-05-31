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
import { ComponentIdentifier, _decode_ComponentIdentifier, _encode_ComponentIdentifier } from "../PlatformCertificateProfile/ComponentIdentifier.ta";
export { ComponentIdentifier, _decode_ComponentIdentifier, _encode_ComponentIdentifier } from "../PlatformCertificateProfile/ComponentIdentifier.ta";
import { URIReference, _decode_URIReference, _encode_URIReference } from "../PlatformCertificateProfile/URIReference.ta";
export { URIReference, _decode_URIReference, _encode_URIReference } from "../PlatformCertificateProfile/URIReference.ta";
import { Properties, _decode_Properties, _encode_Properties } from "../PlatformCertificateProfile/Properties.ta";
export { Properties, _decode_Properties, _encode_Properties } from "../PlatformCertificateProfile/Properties.ta";


/* START_OF_SYMBOL_DEFINITION PlatformConfiguration */
/**
 * @summary PlatformConfiguration
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PlatformConfiguration ::= SEQUENCE {
 *     componentIdentifiers        [0] IMPLICIT SEQUENCE (SIZE(1..MAX)) OF ComponentIdentifier OPTIONAL,
 *     componentIdentifiersUri     [1] IMPLICIT URIReference OPTIONAL,
 *     platformProperties          [2] IMPLICIT SEQUENCE (SIZE(1..MAX)) OF Properties OPTIONAL,
 *     platformPropertiesUri       [3] IMPLICIT URIReference OPTIONAL }
 * ```
 * 
 * @class
 */
export
class PlatformConfiguration {
    constructor (
        /**
         * @summary `componentIdentifiers`.
         * @public
         * @readonly
         */
        readonly componentIdentifiers: OPTIONAL<ComponentIdentifier[]>,
        /**
         * @summary `componentIdentifiersUri`.
         * @public
         * @readonly
         */
        readonly componentIdentifiersUri: OPTIONAL<URIReference>,
        /**
         * @summary `platformProperties`.
         * @public
         * @readonly
         */
        readonly platformProperties: OPTIONAL<Properties[]>,
        /**
         * @summary `platformPropertiesUri`.
         * @public
         * @readonly
         */
        readonly platformPropertiesUri: OPTIONAL<URIReference>
    ) {}

    /**
     * @summary Restructures an object into a PlatformConfiguration
     * @description
     * 
     * This takes an `object` and converts it to a `PlatformConfiguration`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `PlatformConfiguration`.
     * @returns {PlatformConfiguration}
     */
    public static _from_object (_o: { [_K in keyof (PlatformConfiguration)]: (PlatformConfiguration)[_K] }): PlatformConfiguration {
        return new PlatformConfiguration(_o.componentIdentifiers, _o.componentIdentifiersUri, _o.platformProperties, _o.platformPropertiesUri);
    }


}
/* END_OF_SYMBOL_DEFINITION PlatformConfiguration */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_PlatformConfiguration */
/**
 * @summary The Leading Root Component Types of PlatformConfiguration
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_PlatformConfiguration: $.ComponentSpec[] = [
    new $.ComponentSpec("componentIdentifiers", true, $.hasTag(_TagClass.context, 0), undefined, undefined),
    new $.ComponentSpec("componentIdentifiersUri", true, $.hasTag(_TagClass.context, 1), undefined, undefined),
    new $.ComponentSpec("platformProperties", true, $.hasTag(_TagClass.context, 2), undefined, undefined),
    new $.ComponentSpec("platformPropertiesUri", true, $.hasTag(_TagClass.context, 3), undefined, undefined)
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_PlatformConfiguration */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_PlatformConfiguration */
/**
 * @summary The Trailing Root Component Types of PlatformConfiguration
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_PlatformConfiguration: $.ComponentSpec[] = [
    
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_PlatformConfiguration */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_PlatformConfiguration */
/**
 * @summary The Extension Addition Component Types of PlatformConfiguration
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_PlatformConfiguration: $.ComponentSpec[] = [
    
];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_PlatformConfiguration */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_PlatformConfiguration */
let _cached_decoder_for_PlatformConfiguration: $.ASN1Decoder<PlatformConfiguration> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_PlatformConfiguration */

/* START_OF_SYMBOL_DEFINITION _decode_PlatformConfiguration */
/**
 * @summary Decodes an ASN.1 element into a(n) PlatformConfiguration
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PlatformConfiguration} The decoded data structure.
 */
export
function _decode_PlatformConfiguration (el: _Element) {
    if (!_cached_decoder_for_PlatformConfiguration) { _cached_decoder_for_PlatformConfiguration = function (el: _Element): PlatformConfiguration {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let componentIdentifiers: OPTIONAL<ComponentIdentifier[]>;
    let componentIdentifiersUri: OPTIONAL<URIReference>;
    let platformProperties: OPTIONAL<Properties[]>;
    let platformPropertiesUri: OPTIONAL<URIReference>;
    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: $.DecodingMap = {
        "componentIdentifiers": (_el: _Element): void => { componentIdentifiers = $._decode_implicit<ComponentIdentifier[]>(() => $._decodeSequenceOf<ComponentIdentifier>(() => _decode_ComponentIdentifier))(_el); },
        "componentIdentifiersUri": (_el: _Element): void => { componentIdentifiersUri = $._decode_implicit<URIReference>(() => _decode_URIReference)(_el); },
        "platformProperties": (_el: _Element): void => { platformProperties = $._decode_implicit<Properties[]>(() => $._decodeSequenceOf<Properties>(() => _decode_Properties))(_el); },
        "platformPropertiesUri": (_el: _Element): void => { platformPropertiesUri = $._decode_implicit<URIReference>(() => _decode_URIReference)(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_PlatformConfiguration,
        _extension_additions_list_spec_for_PlatformConfiguration,
        _root_component_type_list_2_spec_for_PlatformConfiguration,
        undefined,
    );
    return new PlatformConfiguration( /* SEQUENCE_CONSTRUCTOR_CALL */
        componentIdentifiers,
        componentIdentifiersUri,
        platformProperties,
        platformPropertiesUri
    );
}; }
    return _cached_decoder_for_PlatformConfiguration(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_PlatformConfiguration */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_PlatformConfiguration */
let _cached_encoder_for_PlatformConfiguration: $.ASN1Encoder<PlatformConfiguration> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_PlatformConfiguration */

/* START_OF_SYMBOL_DEFINITION _encode_PlatformConfiguration */
/**
 * @summary Encodes a(n) PlatformConfiguration into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PlatformConfiguration, encoded as an ASN.1 Element.
 */
export
function _encode_PlatformConfiguration (value: PlatformConfiguration, elGetter: $.ASN1Encoder<PlatformConfiguration>) {
    if (!_cached_encoder_for_PlatformConfiguration) { _cached_encoder_for_PlatformConfiguration = function (value: PlatformConfiguration, elGetter: $.ASN1Encoder<PlatformConfiguration>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.componentIdentifiers === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => $._encodeSequenceOf<ComponentIdentifier>(() => _encode_ComponentIdentifier, $.BER), $.BER)(value.componentIdentifiers, $.BER)),
            /* IF_ABSENT  */ ((value.componentIdentifiersUri === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_URIReference, $.BER)(value.componentIdentifiersUri, $.BER)),
            /* IF_ABSENT  */ ((value.platformProperties === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => $._encodeSequenceOf<Properties>(() => _encode_Properties, $.BER), $.BER)(value.platformProperties, $.BER)),
            /* IF_ABSENT  */ ((value.platformPropertiesUri === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_URIReference, $.BER)(value.platformPropertiesUri, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_PlatformConfiguration(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_PlatformConfiguration */

/* eslint-enable */
