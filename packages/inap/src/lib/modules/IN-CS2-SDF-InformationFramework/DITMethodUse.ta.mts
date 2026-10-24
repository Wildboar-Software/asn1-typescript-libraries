/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
// export { OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
// export { METHOD } from "../IN-CS2-SDF-InformationFramework/METHOD.oca.mjs";


/**
 * @summary DITMethodUse
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DITMethodUse ::= SEQUENCE {
 *   objectClass  OBJECT-CLASS.&id,
 *   methods      [1]  SET OF METHOD.&id
 * }
 * ```
 * 
 * @class
 */
export
class DITMethodUse {
    /**
     * @summary `objectClass`.
     * @public
     * @readonly
     */
    readonly objectClass: OBJECT_IDENTIFIER;
    /**
     * @summary `methods`.
     * @public
     * @readonly
     */
    readonly methods: OBJECT_IDENTIFIER[];

    constructor (
        objectClass: OBJECT_IDENTIFIER,
        methods: OBJECT_IDENTIFIER[]
    ) {
        this.objectClass = objectClass;
        this.methods = methods;
    }

    /**
     * @summary Restructures an object into a DITMethodUse
     * @description
     * 
     * This takes an `object` and converts it to a `DITMethodUse`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `DITMethodUse`.
     * @returns {DITMethodUse}
     */
    public static _from_object (_o: { [_K in keyof (DITMethodUse)]: (DITMethodUse)[_K] }): DITMethodUse {
        return new DITMethodUse(_o.objectClass, _o.methods);
    }


}

/**
 * @summary The Leading Root Component Types of DITMethodUse
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_DITMethodUse: $.ComponentSpec[] = [
    new $.ComponentSpec("objectClass", false, $.hasTag(_TagClass.universal, 6)),
    new $.ComponentSpec("methods", false, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of DITMethodUse
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_DITMethodUse: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of DITMethodUse
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_DITMethodUse: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_DITMethodUse: $.ASN1Decoder<DITMethodUse> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DITMethodUse
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DITMethodUse (el: _Element): DITMethodUse {
    if (!_cached_decoder_for_DITMethodUse) { _cached_decoder_for_DITMethodUse = function (el: _Element): DITMethodUse {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("DITMethodUse contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "objectClass";
    sequence[1].name = "methods";
    const objectClass: OBJECT_IDENTIFIER = $._decodeObjectIdentifier(sequence[0]);
    const methods: OBJECT_IDENTIFIER[] = $._decode_explicit<OBJECT_IDENTIFIER[]>(() => $._decodeSetOf<OBJECT_IDENTIFIER>(() => $._decodeObjectIdentifier))(sequence[1]);
    return new DITMethodUse(
        objectClass,
        methods,

    );
}; }
    return _cached_decoder_for_DITMethodUse(el);
}

let _cached_encoder_for_DITMethodUse: $.ASN1Encoder<DITMethodUse> | null = null;

/**
 * @summary Encodes a(n) DITMethodUse into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DITMethodUse, encoded as an ASN.1 Element.
 */
export
function _encode_DITMethodUse (value: DITMethodUse, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DITMethodUse) { _cached_encoder_for_DITMethodUse = function (value: DITMethodUse, elGetter: $.ASN1Encoder<DITMethodUse>): _Element {
    return $._encodeSequence([
        /* REQUIRED   */ $._encodeObjectIdentifier(value.objectClass, $.BER),
        /* REQUIRED   */ $._encode_explicit(_TagClass.context, 1, () => $._encodeSetOf<OBJECT_IDENTIFIER>(() => $._encodeObjectIdentifier, $.BER), $.BER)(value.methods, $.BER)
    ], $.BER);
}; }
    return _cached_encoder_for_DITMethodUse(value, elGetter);
}


/* eslint-enable */
