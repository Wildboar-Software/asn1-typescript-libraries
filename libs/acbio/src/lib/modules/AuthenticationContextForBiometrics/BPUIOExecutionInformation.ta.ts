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
    DataType,
    _decode_DataType,
    _encode_DataType,
} from '../AuthenticationContextForBiometrics/DataType.ta';
export {
    DataType,
    _decode_DataType,
    _encode_DataType,
} from '../AuthenticationContextForBiometrics/DataType.ta';
import {
    IOIndex,
    _decode_IOIndex,
    _encode_IOIndex,
} from '../AuthenticationContextForBiometrics/IOIndex.ta';
export {
    IOIndex,
    _decode_IOIndex,
    _encode_IOIndex,
} from '../AuthenticationContextForBiometrics/IOIndex.ta';
import {
    Hash,
    _decode_Hash,
    _encode_Hash,
} from '../AuthenticationContextForBiometrics/Hash.ta';
export {
    Hash,
    _decode_Hash,
    _encode_Hash,
} from '../AuthenticationContextForBiometrics/Hash.ta';

/* START_OF_SYMBOL_DEFINITION BPUIOExecutionInformation */
/**
 * @summary BPUIOExecutionInformation
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * BPUIOExecutionInformation ::= SEQUENCE {
 *     dataType                DataType,
 *     bpuIOIndex              IOIndex,
 *     subprocessIOIndex       IOIndex,
 *     hash                    Hash }
 * ```
 *
 * @class
 */
export class BPUIOExecutionInformation {
    constructor(
        /**
         * @summary `dataType`.
         * @public
         * @readonly
         */
        readonly dataType: DataType,
        /**
         * @summary `bpuIOIndex`.
         * @public
         * @readonly
         */
        readonly bpuIOIndex: IOIndex,
        /**
         * @summary `subprocessIOIndex`.
         * @public
         * @readonly
         */
        readonly subprocessIOIndex: IOIndex,
        /**
         * @summary `hash`.
         * @public
         * @readonly
         */
        readonly hash: Hash
    ) {}

    /**
     * @summary Restructures an object into a BPUIOExecutionInformation
     * @description
     *
     * This takes an `object` and converts it to a `BPUIOExecutionInformation`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `BPUIOExecutionInformation`.
     * @returns {BPUIOExecutionInformation}
     */
    public static _from_object(
        _o: {
            [_K in keyof BPUIOExecutionInformation]: BPUIOExecutionInformation[_K];
        }
    ): BPUIOExecutionInformation {
        return new BPUIOExecutionInformation(
            _o.dataType,
            _o.bpuIOIndex,
            _o.subprocessIOIndex,
            _o.hash
        );
    }
}
/* END_OF_SYMBOL_DEFINITION BPUIOExecutionInformation */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_BPUIOExecutionInformation */
/**
 * @summary The Leading Root Component Types of BPUIOExecutionInformation
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_BPUIOExecutionInformation: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'dataType',
        false,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'bpuIOIndex',
        false,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'subprocessIOIndex',
        false,
        $.hasTag(_TagClass.context, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'hash',
        false,
        $.hasTag(_TagClass.context, 3),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_BPUIOExecutionInformation */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_BPUIOExecutionInformation */
/**
 * @summary The Trailing Root Component Types of BPUIOExecutionInformation
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_BPUIOExecutionInformation: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_BPUIOExecutionInformation */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_BPUIOExecutionInformation */
/**
 * @summary The Extension Addition Component Types of BPUIOExecutionInformation
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_BPUIOExecutionInformation: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_BPUIOExecutionInformation */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_BPUIOExecutionInformation */
let _cached_decoder_for_BPUIOExecutionInformation: $.ASN1Decoder<BPUIOExecutionInformation> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_BPUIOExecutionInformation */

/* START_OF_SYMBOL_DEFINITION _decode_BPUIOExecutionInformation */
/**
 * @summary Decodes an ASN.1 element into a(n) BPUIOExecutionInformation
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {BPUIOExecutionInformation} The decoded data structure.
 */
export function _decode_BPUIOExecutionInformation(el: _Element) {
    if (!_cached_decoder_for_BPUIOExecutionInformation) {
        _cached_decoder_for_BPUIOExecutionInformation = function (
            el: _Element
        ): BPUIOExecutionInformation {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 4) {
                throw new _ConstructionError(
                    'BPUIOExecutionInformation contained only ' +
                        sequence.length.toString() +
                        ' elements.'
                );
            }
            sequence[0].name = 'dataType';
            sequence[1].name = 'bpuIOIndex';
            sequence[2].name = 'subprocessIOIndex';
            sequence[3].name = 'hash';
            let dataType!: DataType;
            let bpuIOIndex!: IOIndex;
            let subprocessIOIndex!: IOIndex;
            let hash!: Hash;
            dataType = _decode_DataType(sequence[0]);
            bpuIOIndex = _decode_IOIndex(sequence[1]);
            subprocessIOIndex = _decode_IOIndex(sequence[2]);
            hash = _decode_Hash(sequence[3]);
            return new BPUIOExecutionInformation(
                dataType,
                bpuIOIndex,
                subprocessIOIndex,
                hash
            );
        };
    }
    return _cached_decoder_for_BPUIOExecutionInformation(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_BPUIOExecutionInformation */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_BPUIOExecutionInformation */
let _cached_encoder_for_BPUIOExecutionInformation: $.ASN1Encoder<BPUIOExecutionInformation> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_BPUIOExecutionInformation */

/* START_OF_SYMBOL_DEFINITION _encode_BPUIOExecutionInformation */
/**
 * @summary Encodes a(n) BPUIOExecutionInformation into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BPUIOExecutionInformation, encoded as an ASN.1 Element.
 */
export function _encode_BPUIOExecutionInformation(
    value: BPUIOExecutionInformation,
    elGetter: $.ASN1Encoder<BPUIOExecutionInformation>
) {
    if (!_cached_encoder_for_BPUIOExecutionInformation) {
        _cached_encoder_for_BPUIOExecutionInformation = function (
            value: BPUIOExecutionInformation,
            elGetter: $.ASN1Encoder<BPUIOExecutionInformation>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_DataType(
                            value.dataType,
                            $.BER
                        ),
                        /* REQUIRED   */ _encode_IOIndex(
                            value.bpuIOIndex,
                            $.BER
                        ),
                        /* REQUIRED   */ _encode_IOIndex(
                            value.subprocessIOIndex,
                            $.BER
                        ),
                        /* REQUIRED   */ _encode_Hash(value.hash, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_BPUIOExecutionInformation(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_BPUIOExecutionInformation */

/* eslint-enable */
