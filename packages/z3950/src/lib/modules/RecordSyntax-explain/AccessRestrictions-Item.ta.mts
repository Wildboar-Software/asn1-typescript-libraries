/* eslint-disable */
import {
    OBJECT_IDENTIFIER,
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { AccessRestrictions_Item_accessType, _decode_AccessRestrictions_Item_accessType, _encode_AccessRestrictions_Item_accessType } from "../RecordSyntax-explain/AccessRestrictions-Item-accessType.ta.mjs";
import { HumanString, _decode_HumanString, _encode_HumanString } from "../RecordSyntax-explain/HumanString.ta.mjs";


/**
 * @summary AccessRestrictions_Item
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AccessRestrictions-Item ::= SEQUENCE {
 *     accessType [0] INTEGER {
 *         any (0),
 *         search (1),
 *         present (2),
 *         specific-elements (3),
 *         extended-services (4),
 *         by-database (5)
 *     },
 *     accessText [1] IMPLICIT HumanString OPTIONAL,
 *     accessChallenges [2] IMPLICIT SEQUENCE OF OBJECT IDENTIFIER OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class AccessRestrictions_Item {
    /**
     * @summary `accessType`.
     * @public
     * @readonly
     */
    readonly accessType: AccessRestrictions_Item_accessType;
    /**
     * @summary `accessText`.
     * @public
     * @readonly
     */
    readonly accessText: OPTIONAL<HumanString>;
    /**
     * @summary `accessChallenges`.
     * @public
     * @readonly
     */
    readonly accessChallenges: OPTIONAL<OBJECT_IDENTIFIER[]>;

    constructor (
        accessType: AccessRestrictions_Item_accessType,
        accessText: OPTIONAL<HumanString>,
        accessChallenges: OPTIONAL<OBJECT_IDENTIFIER[]>
    ) {
        this.accessType = accessType;
        this.accessText = accessText;
        this.accessChallenges = accessChallenges;
    }

    /**
     * @summary Restructures an object into a AccessRestrictions_Item
     * @description
     * 
     * This takes an `object` and converts it to a `AccessRestrictions_Item`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AccessRestrictions_Item`.
     * @returns {AccessRestrictions_Item}
     */
    public static _from_object (_o: { [_K in keyof (AccessRestrictions_Item)]: (AccessRestrictions_Item)[_K] }): AccessRestrictions_Item {
        return new AccessRestrictions_Item(_o.accessType, _o.accessText, _o.accessChallenges);
    }


}

/**
 * @summary The Leading Root Component Types of AccessRestrictions_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_AccessRestrictions_Item: $.ComponentSpec[] = [
    new $.ComponentSpec("accessType", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("accessText", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("accessChallenges", true, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of AccessRestrictions_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_AccessRestrictions_Item: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of AccessRestrictions_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_AccessRestrictions_Item: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_AccessRestrictions_Item: $.ASN1Decoder<AccessRestrictions_Item> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AccessRestrictions_Item
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AccessRestrictions_Item (el: _Element): AccessRestrictions_Item {
    if (!_cached_decoder_for_AccessRestrictions_Item) { _cached_decoder_for_AccessRestrictions_Item = function (el: _Element): AccessRestrictions_Item {
    let accessType!: AccessRestrictions_Item_accessType;
    let accessText: OPTIONAL<HumanString>;
    let accessChallenges: OPTIONAL<OBJECT_IDENTIFIER[]>;
    const callbacks: $.DecodingMap = {
        "accessType": (_el: _Element): void => { accessType = $._decode_explicit<AccessRestrictions_Item_accessType>(() => _decode_AccessRestrictions_Item_accessType)(_el); },
        "accessText": (_el: _Element): void => { accessText = $._decode_implicit<HumanString>(() => _decode_HumanString)(_el); },
        "accessChallenges": (_el: _Element): void => { accessChallenges = $._decode_implicit<OBJECT_IDENTIFIER[]>(() => $._decodeSequenceOf<OBJECT_IDENTIFIER>(() => $._decodeObjectIdentifier))(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_AccessRestrictions_Item,
        _extension_additions_list_spec_for_AccessRestrictions_Item,
        _root_component_type_list_2_spec_for_AccessRestrictions_Item,
        undefined,
    );
    return new AccessRestrictions_Item(
        accessType,
        accessText,
        accessChallenges
    );
}; }
    return _cached_decoder_for_AccessRestrictions_Item(el);
}

let _cached_encoder_for_AccessRestrictions_Item: $.ASN1Encoder<AccessRestrictions_Item> | null = null;

/**
 * @summary Encodes a(n) AccessRestrictions_Item into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AccessRestrictions_Item, encoded as an ASN.1 Element.
 */
export
function _encode_AccessRestrictions_Item (value: AccessRestrictions_Item, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AccessRestrictions_Item) { _cached_encoder_for_AccessRestrictions_Item = function (value: AccessRestrictions_Item, elGetter: $.ASN1Encoder<AccessRestrictions_Item>): _Element {
    const _components: _Element[] = new Array(3);
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_explicit(_TagClass.context, 0, () => _encode_AccessRestrictions_Item_accessType, $.BER)(value.accessType, $.BER);
    if (value.accessText !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => _encode_HumanString, $.BER)(value.accessText, $.BER);
    }
    if (value.accessChallenges !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => $._encodeSequenceOf<OBJECT_IDENTIFIER>(() => $._encodeObjectIdentifier, $.BER), $.BER)(value.accessChallenges, $.BER);
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_AccessRestrictions_Item(value, elGetter);
}


/* eslint-enable */
