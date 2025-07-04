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
    ObjectInstance,
    _decode_ObjectInstance,
    _encode_ObjectInstance,
} from '@wildboar/cmip';
import {
    MembershipStatus,
    _enum_for_MembershipStatus,
    _decode_MembershipStatus,
    _encode_MembershipStatus,
} from '../MdmpmfASN1Module/MembershipStatus.ta.mjs';
/**
 * @summary VerifyMembershipStatusReply
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * VerifyMembershipStatusReply ::= SEQUENCE {
 *   objectName        ObjectInstance,
 *   membershipStatus  MembershipStatus
 * }
 * ```
 *
 */
export class VerifyMembershipStatusReply {
    constructor(
        /**
         * @summary `objectName`.
         * @public
         * @readonly
         */
        readonly objectName: ObjectInstance,
        /**
         * @summary `membershipStatus`.
         * @public
         * @readonly
         */
        readonly membershipStatus: MembershipStatus
    ) {}

    /**
     * @summary Restructures an object into a VerifyMembershipStatusReply
     * @description
     *
     * This takes an `object` and converts it to a `VerifyMembershipStatusReply`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `VerifyMembershipStatusReply`.
     * @returns {VerifyMembershipStatusReply}
     */
    public static _from_object(
        _o: {
            [_K in keyof VerifyMembershipStatusReply]: VerifyMembershipStatusReply[_K];
        }
    ): VerifyMembershipStatusReply {
        return new VerifyMembershipStatusReply(
            _o.objectName,
            _o.membershipStatus
        );
    }

    /**
     * @summary The enum used as the type of the component `membershipStatus`
     * @public
     * @static
     */

    public static _enum_for_membershipStatus = _enum_for_MembershipStatus;
}

/**
 * @summary The Leading Root Component Types of VerifyMembershipStatusReply
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_VerifyMembershipStatusReply: $.ComponentSpec[] = [
    new $.ComponentSpec('objectName', false, $.hasAnyTag),
    new $.ComponentSpec(
        'membershipStatus',
        false,
        $.hasTag(_TagClass.universal, 10)
    ),
];

/**
 * @summary The Trailing Root Component Types of VerifyMembershipStatusReply
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_VerifyMembershipStatusReply: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of VerifyMembershipStatusReply
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_VerifyMembershipStatusReply: $.ComponentSpec[] = [];

let _cached_decoder_for_VerifyMembershipStatusReply: $.ASN1Decoder<VerifyMembershipStatusReply> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) VerifyMembershipStatusReply
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {VerifyMembershipStatusReply} The decoded data structure.
 */
export function _decode_VerifyMembershipStatusReply(el: _Element): VerifyMembershipStatusReply {
    if (!_cached_decoder_for_VerifyMembershipStatusReply) {
        _cached_decoder_for_VerifyMembershipStatusReply = function (
            el: _Element
        ): VerifyMembershipStatusReply {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    'VerifyMembershipStatusReply contained only ' +
                        sequence.length.toString() +
                        ' elements.'
                );
            }
            sequence[0].name = 'objectName';
            sequence[1].name = 'membershipStatus';
            let objectName!: ObjectInstance;
            let membershipStatus!: MembershipStatus;
            objectName = _decode_ObjectInstance(sequence[0]);
            membershipStatus = _decode_MembershipStatus(sequence[1]);
            return new VerifyMembershipStatusReply(
                objectName,
                membershipStatus
            );
        };
    }
    return _cached_decoder_for_VerifyMembershipStatusReply(el);
}

let _cached_encoder_for_VerifyMembershipStatusReply: $.ASN1Encoder<VerifyMembershipStatusReply> | null = null;

/**
 * @summary Encodes a(n) VerifyMembershipStatusReply into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The VerifyMembershipStatusReply, encoded as an ASN.1 Element.
 */
export function _encode_VerifyMembershipStatusReply(
    value: VerifyMembershipStatusReply,
    elGetter: $.ASN1Encoder<VerifyMembershipStatusReply>
): _Element {
    if (!_cached_encoder_for_VerifyMembershipStatusReply) {
        _cached_encoder_for_VerifyMembershipStatusReply = function (
            value: VerifyMembershipStatusReply        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_ObjectInstance(
                            value.objectName,
                            $.BER
                        ),
                        /* REQUIRED   */ _encode_MembershipStatus(
                            value.membershipStatus,
                            $.BER
                        ),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_VerifyMembershipStatusReply(value, elGetter);
}


/* eslint-enable */
