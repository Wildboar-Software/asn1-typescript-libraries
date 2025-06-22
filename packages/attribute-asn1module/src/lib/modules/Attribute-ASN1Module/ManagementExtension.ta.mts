/* eslint-disable */
import {
    OPTIONAL,
    BOOLEAN,
    OBJECT_IDENTIFIER,
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
    new $.ComponentSpec("identifier", false, $.hasTag(_TagClass.universal, 6)),
    new $.ComponentSpec("significance", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("information", false, $.hasTag(_TagClass.context, 2))
];

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

let _cached_decoder_for_ManagementExtension: $.ASN1Decoder<ManagementExtension> | null = null;

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

let _cached_encoder_for_ManagementExtension: $.ASN1Encoder<ManagementExtension> | null = null;

/**
 * @summary Encodes a(n) ManagementExtension into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ManagementExtension, encoded as an ASN.1 Element.
 */
export
function _encode_ManagementExtension (value: ManagementExtension, elGetter: $.ASN1Encoder<ManagementExtension>) {
    if (!_cached_encoder_for_ManagementExtension) { _cached_encoder_for_ManagementExtension = function (value: ManagementExtension): _Element {
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


/* eslint-enable */
