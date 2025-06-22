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
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';
import {
    Completeness,
    _enum_for_Completeness,
    _decode_Completeness,
    _encode_Completeness,
} from '../MdmpmfASN1Module/Completeness.ta.mjs';
import {
    Membership,
    _decode_Membership,
    _encode_Membership,
} from '../MdmpmfASN1Module/Membership.ta.mjs';
/**
 * @summary ListMembershipReply
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ListMembershipReply ::= SEQUENCE {
 *   completeness  Completeness,
 *   membership    Membership
 * }
 * ```
 *
 * @class
 */
export class ListMembershipReply {
    constructor(
        /**
         * @summary `completeness`.
         * @public
         * @readonly
         */
        readonly completeness: Completeness,
        /**
         * @summary `membership`.
         * @public
         * @readonly
         */
        readonly membership: Membership
    ) {}

    /**
     * @summary Restructures an object into a ListMembershipReply
     * @description
     *
     * This takes an `object` and converts it to a `ListMembershipReply`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ListMembershipReply`.
     * @returns {ListMembershipReply}
     */
    public static _from_object(
        _o: { [_K in keyof ListMembershipReply]: ListMembershipReply[_K] }
    ): ListMembershipReply {
        return new ListMembershipReply(_o.completeness, _o.membership);
    }

    /**
     * @summary The enum used as the type of the component `completeness`
     * @public
     * @static
     */

    public static _enum_for_completeness = _enum_for_Completeness;
}

/**
 * @summary The Leading Root Component Types of ListMembershipReply
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_ListMembershipReply: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'completeness',
        false,
        $.hasTag(_TagClass.universal, 10)
    ),
    new $.ComponentSpec(
        'membership',
        false,
        $.hasTag(_TagClass.universal, 17)
    ),
];

/**
 * @summary The Trailing Root Component Types of ListMembershipReply
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_ListMembershipReply: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of ListMembershipReply
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_ListMembershipReply: $.ComponentSpec[] = [];

let _cached_decoder_for_ListMembershipReply: $.ASN1Decoder<ListMembershipReply> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ListMembershipReply
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ListMembershipReply} The decoded data structure.
 */
export function _decode_ListMembershipReply(el: _Element) {
    if (!_cached_decoder_for_ListMembershipReply) {
        _cached_decoder_for_ListMembershipReply = function (
            el: _Element
        ): ListMembershipReply {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    'ListMembershipReply contained only ' +
                        sequence.length.toString() +
                        ' elements.'
                );
            }
            sequence[0].name = 'completeness';
            sequence[1].name = 'membership';
            let completeness!: Completeness;
            let membership!: Membership;
            completeness = _decode_Completeness(sequence[0]);
            membership = _decode_Membership(sequence[1]);
            return new ListMembershipReply(completeness, membership);
        };
    }
    return _cached_decoder_for_ListMembershipReply(el);
}

let _cached_encoder_for_ListMembershipReply: $.ASN1Encoder<ListMembershipReply> | null = null;

/**
 * @summary Encodes a(n) ListMembershipReply into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ListMembershipReply, encoded as an ASN.1 Element.
 */
export function _encode_ListMembershipReply(
    value: ListMembershipReply,
    elGetter: $.ASN1Encoder<ListMembershipReply>
) {
    if (!_cached_encoder_for_ListMembershipReply) {
        _cached_encoder_for_ListMembershipReply = function (
            value: ListMembershipReply        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_Completeness(
                            value.completeness,
                            $.BER
                        ),
                        /* REQUIRED   */ _encode_Membership(
                            value.membership,
                            $.BER
                        ),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_ListMembershipReply(value, elGetter);
}


/* eslint-enable */
