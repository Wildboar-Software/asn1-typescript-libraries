/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OPTIONAL,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    AlgoInvoke,
    _decode_AlgoInvoke,
    _encode_AlgoInvoke,
} from "@wildboar/pki-stub";
import { AssoID, _decode_AssoID, _encode_AssoID } from "../Wrapper/AssoID.ta.mjs";
import {
    InvokeID,
    _decode_InvokeID,
    _encode_InvokeID,
} from "../Wrapper/InvokeID.ta.mjs";
import {
    SequenceNumber,
    _decode_SequenceNumber,
    _encode_SequenceNumber,
} from "../Wrapper/SequenceNumber.ta.mjs";
import {
    TbpDataTransferClient_conf,
    _decode_TbpDataTransferClient_conf,
    _encode_TbpDataTransferClient_conf,
} from "../Wrapper/TbpDataTransferClient-conf.ta.mjs";
import {
    TimeStamp,
    _decode_TimeStamp,
    _encode_TimeStamp,
} from "../Wrapper/TimeStamp.ta.mjs";
import {
    AadClient,
    _root_component_type_list_1_spec_for_AadClient,
} from "../Wrapper/AadClient.ta.mjs";

/**
 * @summary TbpDataTransferClient
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TbpDataTransferClient ::= SEQUENCE {
 *   COMPONENTS OF    AadClient,
 *   encEnvoke    [3] AlgoInvoke{{SupportedSymmetricKeyAlgorithms}} OPTIONAL,
 *   conf             CHOICE {
 *     clear        [4] WrappedProt{{SupportedProtSet}},
 *     protected    [5] ENCIPHERED{WRAPPED-PROT.&Type},
 *     ... },
 *   ... }
 * ```
 *
 * @class
 */
export class TbpDataTransferClient extends AadClient {
    constructor(
        /**
         * @summary `invokeID`.
         * @public
         * @readonly
         */
        override readonly invokeID: OPTIONAL<InvokeID> /* REPLICATED_COMPONENT */,
        /**
         * @summary `assoID`.
         * @public
         * @readonly
         */
        override readonly assoID: AssoID /* REPLICATED_COMPONENT */,
        /**
         * @summary `time`.
         * @public
         * @readonly
         */
        override readonly time: TimeStamp /* REPLICATED_COMPONENT */,
        /**
         * @summary `seq`.
         * @public
         * @readonly
         */
        override readonly seq: SequenceNumber /* REPLICATED_COMPONENT */,
        /**
         * @summary `keyEst`.
         * @public
         * @readonly
         */
        override readonly keyEst: OPTIONAL<AlgoInvoke> /* REPLICATED_COMPONENT */,
        /**
         * @summary `encEnvoke`.
         * @public
         * @readonly
         */
        readonly encEnvoke: OPTIONAL<AlgoInvoke>,
        /**
         * @summary `conf`.
         * @public
         * @readonly
         */
        readonly conf: TbpDataTransferClient_conf,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {
        super(invokeID, assoID, time, seq, keyEst);
    }

    /**
     * @summary Restructures an object into a TbpDataTransferClient
     * @description
     *
     * This takes an `object` and converts it to a `TbpDataTransferClient`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `TbpDataTransferClient`.
     * @returns {TbpDataTransferClient}
     */
    public static override _from_object(
        _o: { [_K in keyof TbpDataTransferClient]: TbpDataTransferClient[_K] }
    ): TbpDataTransferClient {
        return new TbpDataTransferClient(
            _o.invokeID,
            _o.assoID,
            _o.time,
            _o.seq,
            _o.keyEst,
            _o.encEnvoke,
            _o.conf,
            _o._unrecognizedExtensionsList
        );
    }
}

/**
 * @summary The Leading Root Component Types of TbpDataTransferClient
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_TbpDataTransferClient: $.ComponentSpec[] = [
    ..._root_component_type_list_1_spec_for_AadClient,
    new $.ComponentSpec(
        "encEnvoke",
        true,
        $.hasTag(_TagClass.context, 3)
    ),
    new $.ComponentSpec("conf", false, $.hasAnyTag),
];

/**
 * @summary The Trailing Root Component Types of TbpDataTransferClient
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_TbpDataTransferClient: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of TbpDataTransferClient
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_TbpDataTransferClient: $.ComponentSpec[] = [];

let _cached_decoder_for_TbpDataTransferClient: $.ASN1Decoder<TbpDataTransferClient> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TbpDataTransferClient
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TbpDataTransferClient} The decoded data structure.
 */
export function _decode_TbpDataTransferClient(el: _Element): TbpDataTransferClient {
    if (!_cached_decoder_for_TbpDataTransferClient) {
        _cached_decoder_for_TbpDataTransferClient = function (
            el: _Element
        ): TbpDataTransferClient {
            let invokeID: OPTIONAL<InvokeID>;
            let assoID!: AssoID;
            let time!: TimeStamp;
            let seq!: SequenceNumber;
            let keyEst: OPTIONAL<AlgoInvoke>;
            let encEnvoke: OPTIONAL<AlgoInvoke>;
            let conf!: TbpDataTransferClient_conf;
            let _unrecognizedExtensionsList: _Element[] = [];
            const callbacks: $.DecodingMap = {
                invokeID: (_el: _Element): void => {
                    invokeID = $._decode_implicit<InvokeID>(
                        () => _decode_InvokeID
                    )(_el);
                },
                assoID: (_el: _Element): void => {
                    assoID = _decode_AssoID(_el);
                },
                time: (_el: _Element): void => {
                    time = _decode_TimeStamp(_el);
                },
                seq: (_el: _Element): void => {
                    seq = _decode_SequenceNumber(_el);
                },
                keyEst: (_el: _Element): void => {
                    keyEst = $._decode_implicit<AlgoInvoke>(
                        () => _decode_AlgoInvoke
                    )(_el);
                },
                encEnvoke: (_el: _Element): void => {
                    encEnvoke = $._decode_implicit<AlgoInvoke>(
                        () => _decode_AlgoInvoke
                    )(_el);
                },
                conf: (_el: _Element): void => {
                    conf = _decode_TbpDataTransferClient_conf(_el);
                },
            };
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_TbpDataTransferClient,
                _extension_additions_list_spec_for_TbpDataTransferClient,
                _root_component_type_list_2_spec_for_TbpDataTransferClient,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new TbpDataTransferClient(
                invokeID,
                assoID,
                time,
                seq,
                keyEst,
                encEnvoke,
                conf,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_TbpDataTransferClient(el);
}

let _cached_encoder_for_TbpDataTransferClient: $.ASN1Encoder<TbpDataTransferClient> | null = null;

/**
 * @summary Encodes a(n) TbpDataTransferClient into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TbpDataTransferClient, encoded as an ASN.1 Element.
 */
export function _encode_TbpDataTransferClient(
    value: TbpDataTransferClient,
    elGetter: $.ASN1Encoder<TbpDataTransferClient>
): _Element {
    if (!_cached_encoder_for_TbpDataTransferClient) {
        _cached_encoder_for_TbpDataTransferClient = function (
            value: TbpDataTransferClient        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* IF_ABSENT  */ value.invokeID === undefined
                                ? undefined
                                : $._encode_implicit(
                                      _TagClass.context,
                                      0,
                                      () => _encode_InvokeID,
                                      $.DER
                                  )(value.invokeID, $.DER),
                            /* REQUIRED   */ _encode_AssoID(
                                value.assoID,
                                $.DER
                            ),
                            /* REQUIRED   */ _encode_TimeStamp(
                                value.time,
                                $.DER
                            ),
                            /* REQUIRED   */ _encode_SequenceNumber(
                                value.seq,
                                $.DER
                            ),
                            /* IF_ABSENT  */ value.keyEst === undefined
                                ? undefined
                                : $._encode_implicit(
                                      _TagClass.context,
                                      2,
                                      () => _encode_AlgoInvoke,
                                      $.DER
                                  )(value.keyEst, $.DER),
                            /* IF_ABSENT  */ value.encEnvoke === undefined
                                ? undefined
                                : $._encode_implicit(
                                      _TagClass.context,
                                      3,
                                      () => _encode_AlgoInvoke,
                                      $.DER
                                  )(value.encEnvoke, $.DER),
                            /* REQUIRED   */ _encode_TbpDataTransferClient_conf(
                                value.conf,
                                $.DER
                            ),
                        ],
                        value._unrecognizedExtensionsList
                            ? value._unrecognizedExtensionsList
                            : []
                    )
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.DER
            );
        };
    }
    return _cached_encoder_for_TbpDataTransferClient(value, elGetter);
}


/* eslint-enable */
