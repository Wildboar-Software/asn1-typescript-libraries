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
    ClockAddress,
    _decode_ClockAddress,
    _encode_ClockAddress,
} from '../TimeMF/ClockAddress.ta';
export {
    ClockAddress,
    _decode_ClockAddress,
    _encode_ClockAddress,
} from '../TimeMF/ClockAddress.ta';

/* START_OF_SYMBOL_DEFINITION SinglePeerClock */
/**
 * @summary SinglePeerClock
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SinglePeerClock ::= SEQUENCE {
 *   assocNum    [0]  INTEGER,
 *   assocClock  [1]  ClockAddress
 * }
 * ```
 *
 * @class
 */
export class SinglePeerClock {
    constructor(
        /**
         * @summary `assocNum`.
         * @public
         * @readonly
         */
        readonly assocNum: INTEGER,
        /**
         * @summary `assocClock`.
         * @public
         * @readonly
         */
        readonly assocClock: ClockAddress
    ) {}

    /**
     * @summary Restructures an object into a SinglePeerClock
     * @description
     *
     * This takes an `object` and converts it to a `SinglePeerClock`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SinglePeerClock`.
     * @returns {SinglePeerClock}
     */
    public static _from_object(
        _o: { [_K in keyof SinglePeerClock]: SinglePeerClock[_K] }
    ): SinglePeerClock {
        return new SinglePeerClock(_o.assocNum, _o.assocClock);
    }
}
/* END_OF_SYMBOL_DEFINITION SinglePeerClock */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_SinglePeerClock */
/**
 * @summary The Leading Root Component Types of SinglePeerClock
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_SinglePeerClock: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'assocNum',
        false,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'assocClock',
        false,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_SinglePeerClock */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_SinglePeerClock */
/**
 * @summary The Trailing Root Component Types of SinglePeerClock
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_SinglePeerClock: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_SinglePeerClock */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_SinglePeerClock */
/**
 * @summary The Extension Addition Component Types of SinglePeerClock
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_SinglePeerClock: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_SinglePeerClock */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_SinglePeerClock */
let _cached_decoder_for_SinglePeerClock: $.ASN1Decoder<SinglePeerClock> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_SinglePeerClock */

/* START_OF_SYMBOL_DEFINITION _decode_SinglePeerClock */
/**
 * @summary Decodes an ASN.1 element into a(n) SinglePeerClock
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SinglePeerClock} The decoded data structure.
 */
export function _decode_SinglePeerClock(el: _Element) {
    if (!_cached_decoder_for_SinglePeerClock) {
        _cached_decoder_for_SinglePeerClock = function (
            el: _Element
        ): SinglePeerClock {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    'SinglePeerClock contained only ' +
                        sequence.length.toString() +
                        ' elements.'
                );
            }
            sequence[0].name = 'assocNum';
            sequence[1].name = 'assocClock';
            let assocNum!: INTEGER;
            let assocClock!: ClockAddress;
            assocNum = $._decode_implicit<INTEGER>(() => $._decodeInteger)(
                sequence[0]
            );
            assocClock = $._decode_explicit<ClockAddress>(
                () => _decode_ClockAddress
            )(sequence[1]);
            return new SinglePeerClock(assocNum, assocClock);
        };
    }
    return _cached_decoder_for_SinglePeerClock(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_SinglePeerClock */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_SinglePeerClock */
let _cached_encoder_for_SinglePeerClock: $.ASN1Encoder<SinglePeerClock> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_SinglePeerClock */

/* START_OF_SYMBOL_DEFINITION _encode_SinglePeerClock */
/**
 * @summary Encodes a(n) SinglePeerClock into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SinglePeerClock, encoded as an ASN.1 Element.
 */
export function _encode_SinglePeerClock(
    value: SinglePeerClock,
    elGetter: $.ASN1Encoder<SinglePeerClock>
) {
    if (!_cached_encoder_for_SinglePeerClock) {
        _cached_encoder_for_SinglePeerClock = function (
            value: SinglePeerClock,
            elGetter: $.ASN1Encoder<SinglePeerClock>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ $._encode_implicit(
                            _TagClass.context,
                            0,
                            () => $._encodeInteger,
                            $.BER
                        )(value.assocNum, $.BER),
                        /* REQUIRED   */ $._encode_explicit(
                            _TagClass.context,
                            1,
                            () => _encode_ClockAddress,
                            $.BER
                        )(value.assocClock, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_SinglePeerClock(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_SinglePeerClock */

/* eslint-enable */
