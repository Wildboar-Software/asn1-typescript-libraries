/* eslint-disable */
import {
    itu_t,
    itu_r,
    ccitt,
    iso,
    joint_iso_itu_t,
    joint_iso_ccitt,
    OPTIONAL,
    BOOLEAN,
    INTEGER,
    BIT_STRING,
    OCTET_STRING,
    NULL,
    OBJECT_IDENTIFIER,
    ObjectDescriptor,
    EXTERNAL,
    REAL,
    INSTANCE_OF,
    ENUMERATED,
    EMBEDDED_PDV,
    UTF8String,
    RELATIVE_OID,
    SEQUENCE,
    SEQUENCE_OF,
    SET,
    SET_OF,
    GraphicString,
    NumericString,
    VisibleString,
    PrintableString,
    ISO646String,
    TeletexString,
    GeneralString,
    T61String,
    UniversalString,
    VideotexString,
    BMPString,
    IA5String,
    CharacterString,
    UTCTime,
    GeneralizedTime,
    TIME,
    DATE,
    TIME_OF_DAY,
    DATE_TIME,
    DURATION,
    OID_IRI,
    RELATIVE_OID_IRI,
    TRUE,
    FALSE,
    TRUE_BIT,
    FALSE_BIT,
    PLUS_INFINITY,
    MINUS_INFINITY,
    NOT_A_NUMBER,
    TYPE_IDENTIFIER,
    ABSTRACT_SYNTAX,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/functional.mjs';
import {
    ObjectInstance,
    _decode_ObjectInstance,
    _encode_ObjectInstance,
} from '@wildboar/cmip/src/lib/modules/CMIP-1/ObjectInstance.ta.mjs';
export {
    ObjectInstance,
    _decode_ObjectInstance,
    _encode_ObjectInstance,
} from '@wildboar/cmip/src/lib/modules/CMIP-1/ObjectInstance.ta.mjs';
import {
    MembershipStatus,
    _enum_for_MembershipStatus,
    MembershipStatus_unknown /* IMPORTED_LONG_ENUMERATION_ITEM */,
    unknown /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    MembershipStatus_member /* IMPORTED_LONG_ENUMERATION_ITEM */,
    member /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    MembershipStatus_non_member /* IMPORTED_LONG_ENUMERATION_ITEM */,
    non_member /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    _decode_MembershipStatus,
    _encode_MembershipStatus,
} from '../MdmpmfASN1Module/MembershipStatus.ta.mjs';
export {
    MembershipStatus,
    _enum_for_MembershipStatus,
    MembershipStatus_unknown /* IMPORTED_LONG_ENUMERATION_ITEM */,
    unknown /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    MembershipStatus_member /* IMPORTED_LONG_ENUMERATION_ITEM */,
    member /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    MembershipStatus_non_member /* IMPORTED_LONG_ENUMERATION_ITEM */,
    non_member /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    _decode_MembershipStatus,
    _encode_MembershipStatus,
} from '../MdmpmfASN1Module/MembershipStatus.ta.mjs';

/* START_OF_SYMBOL_DEFINITION VerifyMembershipStatusReply */
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
 * @class
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
/* END_OF_SYMBOL_DEFINITION VerifyMembershipStatusReply */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_VerifyMembershipStatusReply */
/**
 * @summary The Leading Root Component Types of VerifyMembershipStatusReply
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_VerifyMembershipStatusReply: $.ComponentSpec[] = [
    new $.ComponentSpec('objectName', false, $.hasAnyTag, undefined, undefined),
    new $.ComponentSpec(
        'membershipStatus',
        false,
        $.hasTag(_TagClass.universal, 10),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_VerifyMembershipStatusReply */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_VerifyMembershipStatusReply */
/**
 * @summary The Trailing Root Component Types of VerifyMembershipStatusReply
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_VerifyMembershipStatusReply: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_VerifyMembershipStatusReply */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_VerifyMembershipStatusReply */
/**
 * @summary The Extension Addition Component Types of VerifyMembershipStatusReply
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_VerifyMembershipStatusReply: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_VerifyMembershipStatusReply */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_VerifyMembershipStatusReply */
let _cached_decoder_for_VerifyMembershipStatusReply: $.ASN1Decoder<VerifyMembershipStatusReply> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_VerifyMembershipStatusReply */

/* START_OF_SYMBOL_DEFINITION _decode_VerifyMembershipStatusReply */
/**
 * @summary Decodes an ASN.1 element into a(n) VerifyMembershipStatusReply
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {VerifyMembershipStatusReply} The decoded data structure.
 */
export function _decode_VerifyMembershipStatusReply(el: _Element) {
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
/* END_OF_SYMBOL_DEFINITION _decode_VerifyMembershipStatusReply */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_VerifyMembershipStatusReply */
let _cached_encoder_for_VerifyMembershipStatusReply: $.ASN1Encoder<VerifyMembershipStatusReply> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_VerifyMembershipStatusReply */

/* START_OF_SYMBOL_DEFINITION _encode_VerifyMembershipStatusReply */
/**
 * @summary Encodes a(n) VerifyMembershipStatusReply into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The VerifyMembershipStatusReply, encoded as an ASN.1 Element.
 */
export function _encode_VerifyMembershipStatusReply(
    value: VerifyMembershipStatusReply,
    elGetter: $.ASN1Encoder<VerifyMembershipStatusReply>
) {
    if (!_cached_encoder_for_VerifyMembershipStatusReply) {
        _cached_encoder_for_VerifyMembershipStatusReply = function (
            value: VerifyMembershipStatusReply,
            elGetter: $.ASN1Encoder<VerifyMembershipStatusReply>
        ): _Element {
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

/* END_OF_SYMBOL_DEFINITION _encode_VerifyMembershipStatusReply */

/* eslint-enable */
