/* eslint-disable */
import {
    OPTIONAL,
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
    TestSessionId_globalRef,
    _decode_TestSessionId_globalRef,
    _encode_TestSessionId_globalRef,
} from '../Test-ASN1Module/TestSessionId-globalRef.ta.mjs';
/**
 * @summary TestSessionId
 * @description
 *
 * Identifies a test session (a set of test invocations). Assigned by the test
 * conductor and, if present in the request, copied onto every created TO and
 * every result / scheduling-conflict notification. Used to correlate results
 * (algorithm out of scope) and to address suspend / resume / terminate in a
 * best-effort fashion across the session. All performers shall support every
 * component. ITU-T Rec. X.745 (11/93) §7.3.2, 8.1.6.
 * [§7.3.2](https://www.itu.int/rec/T-REC-X.745-199311-I)
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TestSessionId ::= SEQUENCE {
 *   localId    INTEGER,
 *   globalRef
 *     [1]  CHOICE {dnGlobRef   DistinguishedName,
 *                  oidGlobRef  OBJECT IDENTIFIER} OPTIONAL
 * }
 * ```
 *
 */
export class TestSessionId {
    constructor(
        /**
         * @summary `localId`.
         * @description
         *
         * Integer part of the session identifier; always present. ITU-T Rec.
         * X.745 (11/93) §8.1.6.
         * [§8.1.6](https://www.itu.int/rec/T-REC-X.745-199311-I)
         *
         * @public
         * @readonly
         */
        readonly localId: INTEGER,
        /**
         * @summary `globalRef`.
         * @description
         *
         * Optional global qualifier: a Distinguished Name or an OBJECT
         * IDENTIFIER, for uniqueness across systems. ITU-T Rec. X.745 (11/93)
         * §8.1.6.
         * [§8.1.6](https://www.itu.int/rec/T-REC-X.745-199311-I)
         *
         * @public
         * @readonly
         */
        readonly globalRef?: OPTIONAL<TestSessionId_globalRef>
    ) {}

    /**
     * @summary Restructures an object into a TestSessionId
     * @description
     *
     * This takes an `object` and converts it to a `TestSessionId`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `TestSessionId`.
     * @returns {TestSessionId}
     */
    public static _from_object(
        _o: { [_K in keyof TestSessionId]: TestSessionId[_K] }
    ): TestSessionId {
        return new TestSessionId(_o.localId, _o.globalRef);
    }
}

/**
 * @summary The Leading Root Component Types of TestSessionId
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_TestSessionId: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'localId',
        false,
        $.hasTag(_TagClass.universal, 2)
    ),
    new $.ComponentSpec(
        'globalRef',
        true,
        $.hasTag(_TagClass.context, 1)
    ),
];

/**
 * @summary The Trailing Root Component Types of TestSessionId
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_TestSessionId: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of TestSessionId
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_TestSessionId: $.ComponentSpec[] = [];

let _cached_decoder_for_TestSessionId: $.ASN1Decoder<TestSessionId> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TestSessionId
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TestSessionId} The decoded data structure.
 */
export function _decode_TestSessionId(el: _Element): TestSessionId {
    if (!_cached_decoder_for_TestSessionId) {
        _cached_decoder_for_TestSessionId = function (
            el: _Element
        ): TestSessionId {
            let localId!: INTEGER;
            let globalRef: OPTIONAL<TestSessionId_globalRef>;
            const callbacks: $.DecodingMap = {
                localId: (_el: _Element): void => {
                    localId = $._decodeInteger(_el);
                },
                globalRef: (_el: _Element): void => {
                    globalRef = $._decode_explicit<TestSessionId_globalRef>(
                        () => _decode_TestSessionId_globalRef
                    )(_el);
                },
            };
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_TestSessionId,
                _extension_additions_list_spec_for_TestSessionId,
                _root_component_type_list_2_spec_for_TestSessionId,
                undefined
            );
            return new TestSessionId (
                localId,
                globalRef
            );
        };
    }
    return _cached_decoder_for_TestSessionId(el);
}

let _cached_encoder_for_TestSessionId: $.ASN1Encoder<TestSessionId> | null = null;

/**
 * @summary Encodes a(n) TestSessionId into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TestSessionId, encoded as an ASN.1 Element.
 */
export function _encode_TestSessionId(
    value: TestSessionId,
    elGetter: $.ASN1Encoder<TestSessionId>
): _Element {
    if (!_cached_encoder_for_TestSessionId) {
        _cached_encoder_for_TestSessionId = function (
            value: TestSessionId        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ $._encodeInteger(value.localId, $.BER),
                        /* IF_ABSENT  */ value.globalRef === undefined
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  1,
                                  () => _encode_TestSessionId_globalRef,
                                  $.BER
                              )(value.globalRef, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_TestSessionId(value, elGetter);
}


/* eslint-enable */
