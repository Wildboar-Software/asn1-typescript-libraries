/* eslint-disable */
import {
    INTEGER,
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
    DistinguishedName,
    _decode_DistinguishedName,
    _encode_DistinguishedName,
} from '@wildboar/cmip';
/**
 * @summary InvocationId
 * @description
 *
 * Related-test (and optional independent-test) form of a test invocation
 * identifier: DN of the TARR that received the request plus an integer assigned
 * by the test performer. Used when TestInvocationId chooses `invocationId`.
 * Mandatory on every TO. ITU-T Rec. X.745 (11/93) §7.3.1, 8.1.3.
 * [§7.3.1](https://www.itu.int/rec/T-REC-X.745-199311-I)
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * InvocationId ::= SEQUENCE {tARRName  DistinguishedName,
 *                            testId    INTEGER
 * }
 * ```
 *
 */
export class InvocationId {
    constructor(
        /**
         * @summary `tARRName`.
         * @description
         *
         * Distinguished name of the managed object with TARR functionality that
         * received the test request. ITU-T Rec. X.745 (11/93) §8.1.3.
         * [§8.1.3](https://www.itu.int/rec/T-REC-X.745-199311-I)
         *
         * @public
         * @readonly
         */
        readonly tARRName: DistinguishedName,
        /**
         * @summary `testId`.
         * @description
         *
         * Integer assigned by the test performer that, with tARRName, uniquely
         * identifies this test invocation. ITU-T Rec. X.745 (11/93) §7.3.1.
         * [§7.3.1](https://www.itu.int/rec/T-REC-X.745-199311-I)
         *
         * @public
         * @readonly
         */
        readonly testId: INTEGER
    ) {}

    /**
     * @summary Restructures an object into a InvocationId
     * @description
     *
     * This takes an `object` and converts it to a `InvocationId`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `InvocationId`.
     * @returns {InvocationId}
     */
    public static _from_object(
        _o: { [_K in keyof InvocationId]: InvocationId[_K] }
    ): InvocationId {
        return new InvocationId(_o.tARRName, _o.testId);
    }
}

/**
 * @summary The Leading Root Component Types of InvocationId
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_InvocationId: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'tARRName',
        false,
        $.hasTag(_TagClass.universal, 16)
    ),
    new $.ComponentSpec(
        'testId',
        false,
        $.hasTag(_TagClass.universal, 2)
    ),
];

/**
 * @summary The Trailing Root Component Types of InvocationId
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_InvocationId: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of InvocationId
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_InvocationId: $.ComponentSpec[] = [];

let _cached_decoder_for_InvocationId: $.ASN1Decoder<InvocationId> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) InvocationId
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {InvocationId} The decoded data structure.
 */
export function _decode_InvocationId(el: _Element): InvocationId {
    if (!_cached_decoder_for_InvocationId) {
        _cached_decoder_for_InvocationId = function (
            el: _Element
        ): InvocationId {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    'InvocationId contained only ' +
                        sequence.length.toString() +
                        ' elements.'
                );
            }
            sequence[0].name = 'tARRName';
            sequence[1].name = 'testId';
            let tARRName!: DistinguishedName;
            let testId!: INTEGER;
            tARRName = _decode_DistinguishedName(sequence[0]);
            testId = $._decodeInteger(sequence[1]);
            return new InvocationId(tARRName, testId);
        };
    }
    return _cached_decoder_for_InvocationId(el);
}

let _cached_encoder_for_InvocationId: $.ASN1Encoder<InvocationId> | null = null;

/**
 * @summary Encodes a(n) InvocationId into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The InvocationId, encoded as an ASN.1 Element.
 */
export function _encode_InvocationId(
    value: InvocationId,
    elGetter: $.ASN1Encoder<InvocationId>
): _Element {
    if (!_cached_encoder_for_InvocationId) {
        _cached_encoder_for_InvocationId = function (
            value: InvocationId        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_DistinguishedName(
                            value.tARRName,
                            $.BER
                        ),
                        /* REQUIRED   */ $._encodeInteger(value.testId, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_InvocationId(value, elGetter);
}


/* eslint-enable */
