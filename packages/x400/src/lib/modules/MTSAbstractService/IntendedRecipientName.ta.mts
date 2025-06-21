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
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/functional.mjs';
import {
    ORAddressAndOptionalDirectoryName,
    _decode_ORAddressAndOptionalDirectoryName,
    _encode_ORAddressAndOptionalDirectoryName,
} from '../MTSAbstractService/ORAddressAndOptionalDirectoryName.ta.mjs';
import {
    Time,
    _decode_Time,
    _encode_Time,
} from '../MTSAbstractService/Time.ta.mjs';
/**
 * @summary IntendedRecipientName
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * IntendedRecipientName ::= SEQUENCE {
 *   intended-recipient  ORAddressAndOptionalDirectoryName,
 *   redirection-time    Time
 * }
 * ```
 *
 * @class
 */
export class IntendedRecipientName {
    constructor(
        /**
         * @summary `intended_recipient`.
         * @public
         * @readonly
         */
        readonly intended_recipient: ORAddressAndOptionalDirectoryName,
        /**
         * @summary `redirection_time`.
         * @public
         * @readonly
         */
        readonly redirection_time: Time
    ) {}

    /**
     * @summary Restructures an object into a IntendedRecipientName
     * @description
     *
     * This takes an `object` and converts it to a `IntendedRecipientName`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `IntendedRecipientName`.
     * @returns {IntendedRecipientName}
     */
    public static _from_object(
        _o: { [_K in keyof IntendedRecipientName]: IntendedRecipientName[_K] }
    ): IntendedRecipientName {
        return new IntendedRecipientName(
            _o.intended_recipient,
            _o.redirection_time
        );
    }
}

/**
 * @summary The Leading Root Component Types of IntendedRecipientName
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_IntendedRecipientName: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'intended-recipient',
        false,
        $.hasTag(_TagClass.application, 0)
    ),
    new $.ComponentSpec(
        'redirection-time',
        false,
        $.hasTag(_TagClass.universal, 23)
    ),
];

/**
 * @summary The Trailing Root Component Types of IntendedRecipientName
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_IntendedRecipientName: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of IntendedRecipientName
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_IntendedRecipientName: $.ComponentSpec[] = [];

let _cached_decoder_for_IntendedRecipientName: $.ASN1Decoder<IntendedRecipientName> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) IntendedRecipientName
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {IntendedRecipientName} The decoded data structure.
 */
export function _decode_IntendedRecipientName(el: _Element) {
    if (!_cached_decoder_for_IntendedRecipientName) {
        _cached_decoder_for_IntendedRecipientName = function (
            el: _Element
        ): IntendedRecipientName {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    'IntendedRecipientName contained only ' +
                        sequence.length.toString() +
                        ' elements.'
                );
            }
            sequence[0].name = 'intended-recipient';
            sequence[1].name = 'redirection-time';
            let intended_recipient!: ORAddressAndOptionalDirectoryName;
            let redirection_time!: Time;
            intended_recipient = _decode_ORAddressAndOptionalDirectoryName(
                sequence[0]
            );
            redirection_time = _decode_Time(sequence[1]);
            return new IntendedRecipientName(
                intended_recipient,
                redirection_time
            );
        };
    }
    return _cached_decoder_for_IntendedRecipientName(el);
}

let _cached_encoder_for_IntendedRecipientName: $.ASN1Encoder<IntendedRecipientName> | null = null;

/**
 * @summary Encodes a(n) IntendedRecipientName into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IntendedRecipientName, encoded as an ASN.1 Element.
 */
export function _encode_IntendedRecipientName(
    value: IntendedRecipientName,
    elGetter: $.ASN1Encoder<IntendedRecipientName>
) {
    if (!_cached_encoder_for_IntendedRecipientName) {
        _cached_encoder_for_IntendedRecipientName = function (
            value: IntendedRecipientName        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_ORAddressAndOptionalDirectoryName(
                            value.intended_recipient,
                            $.BER
                        ),
                        /* REQUIRED   */ _encode_Time(
                            value.redirection_time,
                            $.BER
                        ),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_IntendedRecipientName(value, elGetter);
}


/* eslint-enable */
