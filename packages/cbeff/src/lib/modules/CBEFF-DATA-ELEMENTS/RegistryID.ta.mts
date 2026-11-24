/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    type INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { assertIntegerRange } from "../../constraints.mjs";



/**
 * @summary RegistryID
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RegistryID ::= SEQUENCE {
 *     organization    INTEGER (1..65535),
 *     id              INTEGER (1..65535)
 *     -- id is a model number or an algorithm identifier, or anything
 *     -- identifying a product line, but never a serial number
 * }
 * ```
 * 
 * @class
 */
export
class RegistryID {
    /**
     * @summary `organization`.
     * @public
     * @readonly
     */
    readonly organization: INTEGER;
    /**
     * @summary `id`.
     * @public
     * @readonly
     */
    readonly id: INTEGER;

    constructor (
        organization: INTEGER,
        id: INTEGER
    ) {
        assertIntegerRange(organization, 1, 65535, "RegistryID.organization");
        assertIntegerRange(id, 1, 65535, "RegistryID.id");
        this.organization = organization;
        this.id = id;
    }

    /**
     * @summary Restructures an object into a RegistryID
     * @description
     * 
     * This takes an `object` and converts it to a `RegistryID`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `RegistryID`.
     * @returns {RegistryID}
     */
    public static _from_object (_o: { [_K in keyof (RegistryID)]: (RegistryID)[_K] }): RegistryID {
        return new RegistryID(_o.organization, _o.id);
    }


}

/**
 * @summary The Leading Root Component Types of RegistryID
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_RegistryID: $.ComponentSpec[] = [
    new $.ComponentSpec("organization", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("id", false, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of RegistryID
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_RegistryID: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of RegistryID
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_RegistryID: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_RegistryID: $.ASN1Decoder<RegistryID> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RegistryID
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RegistryID (el: _Element): RegistryID {
    if (!_cached_decoder_for_RegistryID) { _cached_decoder_for_RegistryID = function (el: _Element): RegistryID {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("RegistryID contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "organization";
    sequence[1].name = "id";
    const organization: INTEGER = $._decodeInteger(sequence[0]);
    const id: INTEGER = $._decodeInteger(sequence[1]);
    return new RegistryID(
        organization,
        id,

    );
}; }
    return _cached_decoder_for_RegistryID(el);
}

let _cached_encoder_for_RegistryID: $.ASN1Encoder<RegistryID> | null = null;

/**
 * @summary Encodes a(n) RegistryID into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RegistryID, encoded as an ASN.1 Element.
 */
export
function _encode_RegistryID (value: RegistryID, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RegistryID) { _cached_encoder_for_RegistryID = function (value: RegistryID, elGetter: $.ASN1Encoder<RegistryID>): _Element {
    return $._encodeSequence([
        /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => $._encodeInteger, $.BER)(value.organization, $.BER),
        /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeInteger, $.BER)(value.id, $.BER)
    ], $.BER);
}; }
    return _cached_encoder_for_RegistryID(value, elGetter);
}


/* eslint-enable */
