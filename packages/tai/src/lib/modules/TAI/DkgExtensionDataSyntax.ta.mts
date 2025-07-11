/* eslint-disable */
import {
    OCTET_STRING,
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
 * @summary DkgExtensionDataSyntax
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DkgExtensionDataSyntax ::= SEQUENCE {
 *   alignmentHelpData        OCTET STRING(SIZE (1..MAX)),
 *   biometricKeyBindingData  OCTET STRING(SIZE (1..MAX))
 * }
 * ```
 * 
 */
export
class DkgExtensionDataSyntax {
    constructor (
        /**
         * @summary `alignmentHelpData`.
         * @public
         * @readonly
         */
        readonly alignmentHelpData: OCTET_STRING,
        /**
         * @summary `biometricKeyBindingData`.
         * @public
         * @readonly
         */
        readonly biometricKeyBindingData: OCTET_STRING
    ) {}

    /**
     * @summary Restructures an object into a DkgExtensionDataSyntax
     * @description
     * 
     * This takes an `object` and converts it to a `DkgExtensionDataSyntax`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `DkgExtensionDataSyntax`.
     * @returns {DkgExtensionDataSyntax}
     */
    public static _from_object (_o: { [_K in keyof (DkgExtensionDataSyntax)]: (DkgExtensionDataSyntax)[_K] }): DkgExtensionDataSyntax {
        return new DkgExtensionDataSyntax(_o.alignmentHelpData, _o.biometricKeyBindingData);
    }


}

/**
 * @summary The Leading Root Component Types of DkgExtensionDataSyntax
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_DkgExtensionDataSyntax: $.ComponentSpec[] = [
    new $.ComponentSpec("alignmentHelpData", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("biometricKeyBindingData", false, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of DkgExtensionDataSyntax
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_DkgExtensionDataSyntax: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of DkgExtensionDataSyntax
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_DkgExtensionDataSyntax: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_DkgExtensionDataSyntax: $.ASN1Decoder<DkgExtensionDataSyntax> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DkgExtensionDataSyntax
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DkgExtensionDataSyntax} The decoded data structure.
 */
export
function _decode_DkgExtensionDataSyntax (el: _Element): DkgExtensionDataSyntax {
    if (!_cached_decoder_for_DkgExtensionDataSyntax) { _cached_decoder_for_DkgExtensionDataSyntax = function (el: _Element): DkgExtensionDataSyntax {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("DkgExtensionDataSyntax contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "alignmentHelpData";
    sequence[1].name = "biometricKeyBindingData";
    let alignmentHelpData!: OCTET_STRING;
    let biometricKeyBindingData!: OCTET_STRING;
    alignmentHelpData = $._decodeOctetString(sequence[0]);
    biometricKeyBindingData = $._decodeOctetString(sequence[1]);
    return new DkgExtensionDataSyntax(
        alignmentHelpData,
        biometricKeyBindingData,

    );
}; }
    return _cached_decoder_for_DkgExtensionDataSyntax(el);
}

let _cached_encoder_for_DkgExtensionDataSyntax: $.ASN1Encoder<DkgExtensionDataSyntax> | null = null;

/**
 * @summary Encodes a(n) DkgExtensionDataSyntax into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DkgExtensionDataSyntax, encoded as an ASN.1 Element.
 */
export
function _encode_DkgExtensionDataSyntax (value: DkgExtensionDataSyntax, elGetter: $.ASN1Encoder<DkgExtensionDataSyntax>): _Element {
    if (!_cached_encoder_for_DkgExtensionDataSyntax) { _cached_encoder_for_DkgExtensionDataSyntax = function (value: DkgExtensionDataSyntax): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encodeOctetString(value.alignmentHelpData, $.BER),
            /* REQUIRED   */ $._encodeOctetString(value.biometricKeyBindingData, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_DkgExtensionDataSyntax(value, elGetter);
}


/* eslint-enable */
