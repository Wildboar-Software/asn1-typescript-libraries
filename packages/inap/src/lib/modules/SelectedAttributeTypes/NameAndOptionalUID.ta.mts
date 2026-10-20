/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { DistinguishedName, _decode_DistinguishedName, _encode_DistinguishedName } from "../InformationFramework/DistinguishedName.ta.mjs";
// export { DistinguishedName, _decode_DistinguishedName, _encode_DistinguishedName } from "../InformationFramework/DistinguishedName.ta.mjs";
import { UniqueIdentifier, _decode_UniqueIdentifier, _encode_UniqueIdentifier } from "../SelectedAttributeTypes/UniqueIdentifier.ta.mjs";
// export { UniqueIdentifier, _decode_UniqueIdentifier, _encode_UniqueIdentifier } from "../SelectedAttributeTypes/UniqueIdentifier.ta.mjs";


/**
 * @summary NameAndOptionalUID
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NameAndOptionalUID ::= SEQUENCE {
 *   dn   DistinguishedName,
 *   uid  UniqueIdentifier OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class NameAndOptionalUID {
    /**
     * @summary `dn`.
     * @public
     * @readonly
     */
    readonly dn: DistinguishedName;
    /**
     * @summary `uid`.
     * @public
     * @readonly
     */
    readonly uid: OPTIONAL<UniqueIdentifier>;

    constructor (
        dn: DistinguishedName,
        uid: OPTIONAL<UniqueIdentifier>
    ) {
        this.dn = dn;
        this.uid = uid;
    }

    /**
     * @summary Restructures an object into a NameAndOptionalUID
     * @description
     * 
     * This takes an `object` and converts it to a `NameAndOptionalUID`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `NameAndOptionalUID`.
     * @returns {NameAndOptionalUID}
     */
    public static _from_object (_o: { [_K in keyof (NameAndOptionalUID)]: (NameAndOptionalUID)[_K] }): NameAndOptionalUID {
        return new NameAndOptionalUID(_o.dn, _o.uid);
    }


}

/**
 * @summary The Leading Root Component Types of NameAndOptionalUID
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_NameAndOptionalUID: $.ComponentSpec[] = [
    new $.ComponentSpec("dn", false, $.hasTag(_TagClass.universal, 16)),
    new $.ComponentSpec("uid", true, $.hasTag(_TagClass.universal, 3))
];

/**
 * @summary The Trailing Root Component Types of NameAndOptionalUID
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_NameAndOptionalUID: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of NameAndOptionalUID
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_NameAndOptionalUID: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_NameAndOptionalUID: $.ASN1Decoder<NameAndOptionalUID> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) NameAndOptionalUID
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_NameAndOptionalUID (el: _Element): NameAndOptionalUID {
    if (!_cached_decoder_for_NameAndOptionalUID) { _cached_decoder_for_NameAndOptionalUID = function (el: _Element): NameAndOptionalUID {
    let dn!: DistinguishedName;
    let uid: OPTIONAL<UniqueIdentifier>;
    const callbacks: $.DecodingMap = {
        "dn": (_el: _Element): void => { dn = _decode_DistinguishedName(_el); },
        "uid": (_el: _Element): void => { uid = _decode_UniqueIdentifier(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_NameAndOptionalUID,
        _extension_additions_list_spec_for_NameAndOptionalUID,
        _root_component_type_list_2_spec_for_NameAndOptionalUID,
        undefined,
    );
    return new NameAndOptionalUID(
        dn,
        uid
    );
}; }
    return _cached_decoder_for_NameAndOptionalUID(el);
}

let _cached_encoder_for_NameAndOptionalUID: $.ASN1Encoder<NameAndOptionalUID> | null = null;

/**
 * @summary Encodes a(n) NameAndOptionalUID into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NameAndOptionalUID, encoded as an ASN.1 Element.
 */
export
function _encode_NameAndOptionalUID (value: NameAndOptionalUID, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_NameAndOptionalUID) { _cached_encoder_for_NameAndOptionalUID = function (value: NameAndOptionalUID, elGetter: $.ASN1Encoder<NameAndOptionalUID>): _Element {
    const _components: _Element[] = [];
    _components.push(/* REQUIRED   */ _encode_DistinguishedName(value.dn, $.BER));
    if (value.uid !== undefined) {
        _components.push(/* IF_ABSENT  */ _encode_UniqueIdentifier(value.uid, $.BER));
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_NameAndOptionalUID(value, elGetter);
}


/* eslint-enable */
