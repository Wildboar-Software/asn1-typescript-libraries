/* eslint-disable */
import {
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
import { AccessId, _decode_AccessId, _encode_AccessId } from "../DFRBasicAttributes/AccessId.ta.mjs";
// export { AccessId, _decode_AccessId, _encode_AccessId } from "../DFRBasicAttributes/AccessId.ta.mjs";
import { AccessRights, _enum_for_AccessRights, _decode_AccessRights, _encode_AccessRights } from "../DFRBasicAttributes/AccessRights.ta.mjs";
// export { AccessRights, _enum_for_AccessRights, AccessRights_read /* IMPORTED_LONG_ENUMERATION_ITEM */, read /* IMPORTED_SHORT_ENUMERATION_ITEM */, AccessRights_extended_read /* IMPORTED_LONG_ENUMERATION_ITEM */, extended_read /* IMPORTED_SHORT_ENUMERATION_ITEM */, AccessRights_read_modify /* IMPORTED_LONG_ENUMERATION_ITEM */, read_modify /* IMPORTED_SHORT_ENUMERATION_ITEM */, AccessRights_read_modify_delete /* IMPORTED_LONG_ENUMERATION_ITEM */, read_modify_delete /* IMPORTED_SHORT_ENUMERATION_ITEM */, AccessRights_owner /* IMPORTED_LONG_ENUMERATION_ITEM */, owner /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_AccessRights, _encode_AccessRights } from "../DFRBasicAttributes/AccessRights.ta.mjs";


/**
 * @summary DfrAccessListElement
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DfrAccessListElement ::= SEQUENCE {
 *     access-id       AccessId,
 *     access-rights   AccessRights
 * }
 * ```
 * 
 * @class
 */
export
class DfrAccessListElement {
    constructor (
        /**
         * @summary `access_id`.
         * @public
         * @readonly
         */
        readonly access_id: AccessId,
        /**
         * @summary `access_rights`.
         * @public
         * @readonly
         */
        readonly access_rights: AccessRights
    ) {}

    /**
     * @summary Restructures an object into a DfrAccessListElement
     * @description
     * 
     * This takes an `object` and converts it to a `DfrAccessListElement`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `DfrAccessListElement`.
     * @returns {DfrAccessListElement}
     */
    public static _from_object (_o: { [_K in keyof (DfrAccessListElement)]: (DfrAccessListElement)[_K] }): DfrAccessListElement {
        return new DfrAccessListElement(_o.access_id, _o.access_rights);
    }

        /**
         * @summary The enum used as the type of the component `access_rights`
         * @public
         * @static
         */

    public static _enum_for_access_rights = _enum_for_AccessRights;
}

/**
 * @summary The Leading Root Component Types of DfrAccessListElement
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_DfrAccessListElement: $.ComponentSpec[] = [
    new $.ComponentSpec("access-id", false, $.hasTag(_TagClass.universal, 16)),
    new $.ComponentSpec("access-rights", false, $.hasTag(_TagClass.universal, 10))
];

/**
 * @summary The Trailing Root Component Types of DfrAccessListElement
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_DfrAccessListElement: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of DfrAccessListElement
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_DfrAccessListElement: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_DfrAccessListElement: $.ASN1Decoder<DfrAccessListElement> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DfrAccessListElement
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DfrAccessListElement (el: _Element): DfrAccessListElement {
    if (!_cached_decoder_for_DfrAccessListElement) { _cached_decoder_for_DfrAccessListElement = function (el: _Element): DfrAccessListElement {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("DfrAccessListElement contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "access-id";
    sequence[1].name = "access-rights";
    let access_id!: AccessId;
    let access_rights!: AccessRights;
    access_id = _decode_AccessId(sequence[0]);
    access_rights = _decode_AccessRights(sequence[1]);
    return new DfrAccessListElement(
        access_id,
        access_rights,

    );
}; }
    return _cached_decoder_for_DfrAccessListElement(el);
}

let _cached_encoder_for_DfrAccessListElement: $.ASN1Encoder<DfrAccessListElement> | null = null;

/**
 * @summary Encodes a(n) DfrAccessListElement into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DfrAccessListElement, encoded as an ASN.1 Element.
 */
export
function _encode_DfrAccessListElement (value: DfrAccessListElement, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DfrAccessListElement) { _cached_encoder_for_DfrAccessListElement = function (value: DfrAccessListElement): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_AccessId(value.access_id, $.BER),
            /* REQUIRED   */ _encode_AccessRights(value.access_rights, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_DfrAccessListElement(value, elGetter);
}


/* eslint-enable */
