/* eslint-disable */
import {
    OPTIONAL,
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
    SubprocessIndexList,
    _decode_SubprocessIndexList,
    _encode_SubprocessIndexList,
} from '../AuthenticationContextForBiometrics/SubprocessIndexList.ta.mjs';
import {
    BPUIOExecutionInformationList,
    _decode_BPUIOExecutionInformationList,
    _encode_BPUIOExecutionInformationList,
} from '../AuthenticationContextForBiometrics/BPUIOExecutionInformationList.ta.mjs';

/**
 * @summary BiometricProcess
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * BiometricProcess ::= SEQUENCE {
 *     subprocessIndexList                 SubprocessIndexList,
 *     bpuInputExecutionInformationList    BPUIOExecutionInformationList OPTIONAL,
 *     bpuOuputExecutionInformationList    BPUIOExecutionInformationList OPTIONAL }
 * ```
 *
 * @class
 */
export class BiometricProcess {
    constructor(
        /**
         * @summary `subprocessIndexList`.
         * @public
         * @readonly
         */
        readonly subprocessIndexList: SubprocessIndexList,
        /**
         * @summary `bpuInputExecutionInformationList`.
         * @public
         * @readonly
         */
        readonly bpuInputExecutionInformationList: OPTIONAL<BPUIOExecutionInformationList>,
        /**
         * @summary `bpuOuputExecutionInformationList`.
         * @public
         * @readonly
         */
        readonly bpuOuputExecutionInformationList: OPTIONAL<BPUIOExecutionInformationList>
    ) {}

    /**
     * @summary Restructures an object into a BiometricProcess
     * @description
     *
     * This takes an `object` and converts it to a `BiometricProcess`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `BiometricProcess`.
     * @returns {BiometricProcess}
     */
    public static _from_object(
        _o: { [_K in keyof BiometricProcess]: BiometricProcess[_K] }
    ): BiometricProcess {
        return new BiometricProcess(
            _o.subprocessIndexList,
            _o.bpuInputExecutionInformationList,
            _o.bpuOuputExecutionInformationList
        );
    }
}


/**
 * @summary The Leading Root Component Types of BiometricProcess
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_BiometricProcess: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'subprocessIndexList',
        false,
        $.hasTag(_TagClass.context, 0)
    ),
    new $.ComponentSpec(
        'bpuInputExecutionInformationList',
        true,
        $.hasTag(_TagClass.context, 1)
    ),
    new $.ComponentSpec(
        'bpuOuputExecutionInformationList',
        true,
        $.hasTag(_TagClass.context, 2)
    ),
];


/**
 * @summary The Trailing Root Component Types of BiometricProcess
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_BiometricProcess: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of BiometricProcess
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_BiometricProcess: $.ComponentSpec[] = [];


let _cached_decoder_for_BiometricProcess: $.ASN1Decoder<BiometricProcess> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) BiometricProcess
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {BiometricProcess} The decoded data structure.
 */
export function _decode_BiometricProcess(el: _Element) {
    if (!_cached_decoder_for_BiometricProcess) {
        _cached_decoder_for_BiometricProcess = function (
            el: _Element
        ): BiometricProcess {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let subprocessIndexList!: SubprocessIndexList;
            let bpuInputExecutionInformationList: OPTIONAL<BPUIOExecutionInformationList>;
            let bpuOuputExecutionInformationList: OPTIONAL<BPUIOExecutionInformationList>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                subprocessIndexList: (_el: _Element): void => {
                    subprocessIndexList = _decode_SubprocessIndexList(_el);
                },
                bpuInputExecutionInformationList: (_el: _Element): void => {
                    bpuInputExecutionInformationList = _decode_BPUIOExecutionInformationList(
                        _el
                    );
                },
                bpuOuputExecutionInformationList: (_el: _Element): void => {
                    bpuOuputExecutionInformationList = _decode_BPUIOExecutionInformationList(
                        _el
                    );
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_BiometricProcess,
                _extension_additions_list_spec_for_BiometricProcess,
                _root_component_type_list_2_spec_for_BiometricProcess,
                undefined
            );
            return new BiometricProcess /* SEQUENCE_CONSTRUCTOR_CALL */(
                subprocessIndexList,
                bpuInputExecutionInformationList,
                bpuOuputExecutionInformationList
            );
        };
    }
    return _cached_decoder_for_BiometricProcess(el);
}


let _cached_encoder_for_BiometricProcess: $.ASN1Encoder<BiometricProcess> | null = null;


/**
 * @summary Encodes a(n) BiometricProcess into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BiometricProcess, encoded as an ASN.1 Element.
 */
export function _encode_BiometricProcess(
    value: BiometricProcess,
    elGetter: $.ASN1Encoder<BiometricProcess>
) {
    if (!_cached_encoder_for_BiometricProcess) {
        _cached_encoder_for_BiometricProcess = function (
            value: BiometricProcess        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_SubprocessIndexList(
                            value.subprocessIndexList,
                            $.BER
                        ),
                        /* IF_ABSENT  */ value.bpuInputExecutionInformationList ===
                        undefined
                            ? undefined
                            : _encode_BPUIOExecutionInformationList(
                                  value.bpuInputExecutionInformationList,
                                  $.BER
                              ),
                        /* IF_ABSENT  */ value.bpuOuputExecutionInformationList ===
                        undefined
                            ? undefined
                            : _encode_BPUIOExecutionInformationList(
                                  value.bpuOuputExecutionInformationList,
                                  $.BER
                              ),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_BiometricProcess(value, elGetter);
}


/* eslint-enable */
