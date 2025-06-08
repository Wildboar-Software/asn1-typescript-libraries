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
import * as $ from 'asn1-ts/dist/node/functional';
import {
    ObjectInstance,
    _decode_ObjectInstance,
    _encode_ObjectInstance,
} from '@wildboar/cmip/src/lib/modules/CMIP-1/ObjectInstance.ta';
export {
    ObjectInstance,
    _decode_ObjectInstance,
    _encode_ObjectInstance,
} from '@wildboar/cmip/src/lib/modules/CMIP-1/ObjectInstance.ta';

/* START_OF_SYMBOL_DEFINITION NoSuchParticipant */
/**
 * @summary NoSuchParticipant
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * NoSuchParticipant ::= SEQUENCE {
 *   role            [0]  OBJECT IDENTIFIER,
 *   objectInstance  [1]  ObjectInstance
 * }
 * ```
 *
 * @class
 */
export class NoSuchParticipant {
    constructor(
        /**
         * @summary `role`.
         * @public
         * @readonly
         */
        readonly role: OBJECT_IDENTIFIER,
        /**
         * @summary `objectInstance`.
         * @public
         * @readonly
         */
        readonly objectInstance: ObjectInstance
    ) {}

    /**
     * @summary Restructures an object into a NoSuchParticipant
     * @description
     *
     * This takes an `object` and converts it to a `NoSuchParticipant`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `NoSuchParticipant`.
     * @returns {NoSuchParticipant}
     */
    public static _from_object(
        _o: { [_K in keyof NoSuchParticipant]: NoSuchParticipant[_K] }
    ): NoSuchParticipant {
        return new NoSuchParticipant(_o.role, _o.objectInstance);
    }
}
/* END_OF_SYMBOL_DEFINITION NoSuchParticipant */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_NoSuchParticipant */
/**
 * @summary The Leading Root Component Types of NoSuchParticipant
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_NoSuchParticipant: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'role',
        false,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'objectInstance',
        false,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_NoSuchParticipant */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_NoSuchParticipant */
/**
 * @summary The Trailing Root Component Types of NoSuchParticipant
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_NoSuchParticipant: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_NoSuchParticipant */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_NoSuchParticipant */
/**
 * @summary The Extension Addition Component Types of NoSuchParticipant
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_NoSuchParticipant: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_NoSuchParticipant */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_NoSuchParticipant */
let _cached_decoder_for_NoSuchParticipant: $.ASN1Decoder<NoSuchParticipant> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_NoSuchParticipant */

/* START_OF_SYMBOL_DEFINITION _decode_NoSuchParticipant */
/**
 * @summary Decodes an ASN.1 element into a(n) NoSuchParticipant
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {NoSuchParticipant} The decoded data structure.
 */
export function _decode_NoSuchParticipant(el: _Element) {
    if (!_cached_decoder_for_NoSuchParticipant) {
        _cached_decoder_for_NoSuchParticipant = function (
            el: _Element
        ): NoSuchParticipant {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    'NoSuchParticipant contained only ' +
                        sequence.length.toString() +
                        ' elements.'
                );
            }
            sequence[0].name = 'role';
            sequence[1].name = 'objectInstance';
            let role!: OBJECT_IDENTIFIER;
            let objectInstance!: ObjectInstance;
            role = $._decode_explicit<OBJECT_IDENTIFIER>(
                () => $._decodeObjectIdentifier
            )(sequence[0]);
            objectInstance = $._decode_explicit<ObjectInstance>(
                () => _decode_ObjectInstance
            )(sequence[1]);
            return new NoSuchParticipant(role, objectInstance);
        };
    }
    return _cached_decoder_for_NoSuchParticipant(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_NoSuchParticipant */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_NoSuchParticipant */
let _cached_encoder_for_NoSuchParticipant: $.ASN1Encoder<NoSuchParticipant> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_NoSuchParticipant */

/* START_OF_SYMBOL_DEFINITION _encode_NoSuchParticipant */
/**
 * @summary Encodes a(n) NoSuchParticipant into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NoSuchParticipant, encoded as an ASN.1 Element.
 */
export function _encode_NoSuchParticipant(
    value: NoSuchParticipant,
    elGetter: $.ASN1Encoder<NoSuchParticipant>
) {
    if (!_cached_encoder_for_NoSuchParticipant) {
        _cached_encoder_for_NoSuchParticipant = function (
            value: NoSuchParticipant,
            elGetter: $.ASN1Encoder<NoSuchParticipant>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ $._encode_explicit(
                            _TagClass.context,
                            0,
                            () => $._encodeObjectIdentifier,
                            $.BER
                        )(value.role, $.BER),
                        /* REQUIRED   */ $._encode_explicit(
                            _TagClass.context,
                            1,
                            () => _encode_ObjectInstance,
                            $.BER
                        )(value.objectInstance, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_NoSuchParticipant(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_NoSuchParticipant */

/* eslint-enable */
