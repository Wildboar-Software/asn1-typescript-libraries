/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { InternationalString, _decode_InternationalString, _encode_InternationalString } from "../Z39-50-APDU-2001/InternationalString.ta.mjs";
import { Permissions_Item_allowableFunctions_Item, _decode_Permissions_Item_allowableFunctions_Item, _encode_Permissions_Item_allowableFunctions_Item } from "../Z39-50-APDU-2001/Permissions-Item-allowableFunctions-Item.ta.mjs";


/**
 * @summary Permissions_Item
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Permissions-Item ::= SEQUENCE {
 *     userId [1] IMPLICIT InternationalString,
 *     allowableFunctions [2] IMPLICIT SEQUENCE OF INTEGER {
 *         delete (1),
 *         modifyContents (2),
 *         modifyPermissions (3),
 *         present (4),
 *         invoke (5)
 *     }
 * }
 * ```
 * 
 * @class
 */
export
class Permissions_Item {
    /**
     * @summary `userId`.
     * @public
     * @readonly
     */
    readonly userId: InternationalString;
    /**
     * @summary `allowableFunctions`.
     * @public
     * @readonly
     */
    readonly allowableFunctions: Permissions_Item_allowableFunctions_Item[];

    constructor (
        userId: InternationalString,
        allowableFunctions: Permissions_Item_allowableFunctions_Item[]
    ) {
        this.userId = userId;
        this.allowableFunctions = allowableFunctions;
    }

    /**
     * @summary Restructures an object into a Permissions_Item
     * @description
     * 
     * This takes an `object` and converts it to a `Permissions_Item`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Permissions_Item`.
     * @returns {Permissions_Item}
     */
    public static _from_object (_o: { [_K in keyof (Permissions_Item)]: (Permissions_Item)[_K] }): Permissions_Item {
        return new Permissions_Item(_o.userId, _o.allowableFunctions);
    }


}

/**
 * @summary The Leading Root Component Types of Permissions_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_Permissions_Item: $.ComponentSpec[] = [
    new $.ComponentSpec("userId", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("allowableFunctions", false, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of Permissions_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_Permissions_Item: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of Permissions_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_Permissions_Item: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_Permissions_Item: $.ASN1Decoder<Permissions_Item> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Permissions_Item
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Permissions_Item (el: _Element): Permissions_Item {
    if (!_cached_decoder_for_Permissions_Item) { _cached_decoder_for_Permissions_Item = function (el: _Element): Permissions_Item {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("Permissions-Item contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "userId";
    sequence[1].name = "allowableFunctions";
    let userId!: InternationalString;
    let allowableFunctions!: Permissions_Item_allowableFunctions_Item[];
    userId = $._decode_implicit<InternationalString>(() => _decode_InternationalString)(sequence[0]);
    allowableFunctions = $._decode_implicit<Permissions_Item_allowableFunctions_Item[]>(() => $._decodeSequenceOf<Permissions_Item_allowableFunctions_Item>(() => _decode_Permissions_Item_allowableFunctions_Item))(sequence[1]);
    return new Permissions_Item(
        userId,
        allowableFunctions,

    );
}; }
    return _cached_decoder_for_Permissions_Item(el);
}

let _cached_encoder_for_Permissions_Item: $.ASN1Encoder<Permissions_Item> | null = null;

/**
 * @summary Encodes a(n) Permissions_Item into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Permissions_Item, encoded as an ASN.1 Element.
 */
export
function _encode_Permissions_Item (value: Permissions_Item, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Permissions_Item) { _cached_encoder_for_Permissions_Item = function (value: Permissions_Item, elGetter: $.ASN1Encoder<Permissions_Item>): _Element {
    return $._encodeSequence([
        /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_InternationalString, $.BER)(value.userId, $.BER),
        /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => $._encodeSequenceOf<Permissions_Item_allowableFunctions_Item>(() => _encode_Permissions_Item_allowableFunctions_Item, $.BER), $.BER)(value.allowableFunctions, $.BER)
    ], $.BER);
}; }
    return _cached_encoder_for_Permissions_Item(value, elGetter);
}


/* eslint-enable */
