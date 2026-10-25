/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary Extension
 * @description
 *
 * One manufacturer-specific addition inside a standardised argument, result, or
 * error (ECMA-165 §9.2, Table 14). The receiver processes it only when it
 * recognises `extensionId`. Otherwise it discards the whole Extension. In a
 * sequence, each Extension is judged separately, so only the unrecognised ones
 * are discarded.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-165/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Extension { EXTENSION: ExtensionSet } ::= SEQUENCE {
 *     extensionId EXTENSION.&extensionId ({Extensionset}),
 *     extensionArgument EXTENSION.&ArgumentType ({ExtensionSet} {@extensionId})
 * }
 * ```
 * 
 * @class
 */
export
class Extension {
    /**
     * @summary `extensionId`.
     * @description
     *
     * Object identifier of this manufacturer-specific information. Unrecognised
     * values cause this Extension to be discarded (ECMA-165 §9.2).
     * @public
     * @readonly
     */
    readonly extensionId: OBJECT_IDENTIFIER;
    /**
     * @summary `extensionArgument`.
     * @description
     *
     * Payload of the extension identified by `extensionId`. Table 14 constrains
     * it to the argument type of that object. The Standard does not define the
     * contents; the manufacturer identified by the object identifier does.
     * @public
     * @readonly
     */
    readonly extensionArgument: _Element;

    constructor (
        extensionId: OBJECT_IDENTIFIER,
        extensionArgument: _Element
    ) {
        this.extensionId = extensionId;
        this.extensionArgument = extensionArgument;
    }

    /**
     * @summary Restructures an object into a Extension
     * @description
     * 
     * This takes an `object` and converts it to a `Extension`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Extension`.
     * @returns {Extension}
     */
    public static _from_object (_o: { [_K in keyof (Extension)]: (Extension)[_K] }): Extension {
        return new Extension(_o.extensionId, _o.extensionArgument);
    }

}

/**
 * @summary The Leading Root Component Types of Extension
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_Extension: $.ComponentSpec[] = [
    new $.ComponentSpec("extensionId", false, $.hasTag(_TagClass.universal, 6)),
    new $.ComponentSpec("extensionArgument", false, $.hasAnyTag)
];

/**
 * @summary The Trailing Root Component Types of Extension
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_Extension: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of Extension
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_Extension: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_Extension: $.ASN1Decoder<Extension> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Extension
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Extension (el: _Element): Extension {
    if (!_cached_decoder_for_Extension) { _cached_decoder_for_Extension = function (el: _Element): Extension {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("Extension contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "extensionId";
    sequence[1].name = "extensionArgument";
    const extensionId: OBJECT_IDENTIFIER = $._decodeObjectIdentifier(sequence[0]);
    const extensionArgument: _Element = $._decodeAny(sequence[1]);
    return new Extension(
        extensionId,
        extensionArgument,

    );
}; }
    return _cached_decoder_for_Extension(el);
}

let _cached_encoder_for_Extension: $.ASN1Encoder<Extension> | null = null;

/**
 * @summary Encodes a(n) Extension into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Extension, encoded as an ASN.1 Element.
 */
export
function _encode_Extension (value: Extension, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Extension) { _cached_encoder_for_Extension = function (value: Extension, _elGetter: $.ASN1Encoder<Extension>): _Element {
    return $._encodeSequence([
        /* REQUIRED   */ $._encodeObjectIdentifier(value.extensionId, $.BER),
        /* REQUIRED   */ $._encodeAny(value.extensionArgument, $.BER)
    ], $.BER);
}; }
    return _cached_encoder_for_Extension(value, elGetter);
}

/* eslint-enable */
