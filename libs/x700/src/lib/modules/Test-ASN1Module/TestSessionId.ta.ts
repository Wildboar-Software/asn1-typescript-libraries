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
    TestSessionId_globalRef,
    _decode_TestSessionId_globalRef,
    _encode_TestSessionId_globalRef,
} from '../Test-ASN1Module/TestSessionId-globalRef.ta';
export {
    TestSessionId_globalRef,
    _decode_TestSessionId_globalRef,
    _encode_TestSessionId_globalRef,
} from '../Test-ASN1Module/TestSessionId-globalRef.ta';

/* START_OF_SYMBOL_DEFINITION TestSessionId */
/**
 * @summary TestSessionId
 * @description
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
 * @class
 */
export class TestSessionId {
    constructor(
        /**
         * @summary `localId`.
         * @public
         * @readonly
         */
        readonly localId: INTEGER,
        /**
         * @summary `globalRef`.
         * @public
         * @readonly
         */
        readonly globalRef: OPTIONAL<TestSessionId_globalRef>
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
/* END_OF_SYMBOL_DEFINITION TestSessionId */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_TestSessionId */
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
        $.hasTag(_TagClass.universal, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'globalRef',
        true,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_TestSessionId */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_TestSessionId */
/**
 * @summary The Trailing Root Component Types of TestSessionId
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_TestSessionId: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_TestSessionId */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_TestSessionId */
/**
 * @summary The Extension Addition Component Types of TestSessionId
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_TestSessionId: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_TestSessionId */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_TestSessionId */
let _cached_decoder_for_TestSessionId: $.ASN1Decoder<TestSessionId> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_TestSessionId */

/* START_OF_SYMBOL_DEFINITION _decode_TestSessionId */
/**
 * @summary Decodes an ASN.1 element into a(n) TestSessionId
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TestSessionId} The decoded data structure.
 */
export function _decode_TestSessionId(el: _Element) {
    if (!_cached_decoder_for_TestSessionId) {
        _cached_decoder_for_TestSessionId = function (
            el: _Element
        ): TestSessionId {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let localId!: INTEGER;
            let globalRef: OPTIONAL<TestSessionId_globalRef>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
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
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_TestSessionId,
                _extension_additions_list_spec_for_TestSessionId,
                _root_component_type_list_2_spec_for_TestSessionId,
                undefined
            );
            return new TestSessionId /* SEQUENCE_CONSTRUCTOR_CALL */(
                localId,
                globalRef
            );
        };
    }
    return _cached_decoder_for_TestSessionId(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_TestSessionId */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_TestSessionId */
let _cached_encoder_for_TestSessionId: $.ASN1Encoder<TestSessionId> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_TestSessionId */

/* START_OF_SYMBOL_DEFINITION _encode_TestSessionId */
/**
 * @summary Encodes a(n) TestSessionId into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TestSessionId, encoded as an ASN.1 Element.
 */
export function _encode_TestSessionId(
    value: TestSessionId,
    elGetter: $.ASN1Encoder<TestSessionId>
) {
    if (!_cached_encoder_for_TestSessionId) {
        _cached_encoder_for_TestSessionId = function (
            value: TestSessionId,
            elGetter: $.ASN1Encoder<TestSessionId>
        ): _Element {
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

/* END_OF_SYMBOL_DEFINITION _encode_TestSessionId */

/* eslint-enable */
