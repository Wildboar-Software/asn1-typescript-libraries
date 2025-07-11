/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    BOOLEAN,
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
    TbpDataTransferServer_conf,
    _decode_TbpDataTransferServer_conf,
    _encode_TbpDataTransferServer_conf,
} from "../Wrapper/TbpDataTransferServer-conf.ta.mjs";
import {
    TimeStamp,
    _decode_TimeStamp,
    _encode_TimeStamp,
} from "../Wrapper/TimeStamp.ta.mjs";
import {
    AadServer,
    _root_component_type_list_1_spec_for_AadServer,
} from "../Wrapper/AadServer.ta.mjs";

/**
 * @summary TbpDataTransferServer
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TbpDataTransferServer ::= SEQUENCE {
 *   COMPONENTS OF     AadServer,
 *   encInvoke     [3] AlgoInvoke{{SupportedSymmetricKeyAlgorithms}} OPTIONAL,
 *   conf              CHOICE {
 *     clear         [4] WrappedProt{{SupportedProtSet}},
 *     protected     [5] ENCIPHERED{WRAPPED-PROT.&Type},
 *     ... },
 *   ... }
 * ```
 *
 */
export class TbpDataTransferServer extends AadServer {
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
         * @summary `reqRekey`.
         * @public
         * @readonly
         */
        override readonly reqRekey: OPTIONAL<BOOLEAN> /* REPLICATED_COMPONENT */,
        /**
         * @summary `changedKey`.
         * @public
         * @readonly
         */
        override readonly changedKey: OPTIONAL<BOOLEAN> /* REPLICATED_COMPONENT */,
        /**
         * @summary `encInvoke`.
         * @public
         * @readonly
         */
        readonly encInvoke: OPTIONAL<AlgoInvoke>,
        /**
         * @summary `conf`.
         * @public
         * @readonly
         */
        readonly conf: TbpDataTransferServer_conf,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {
        super(invokeID, assoID, time, seq, reqRekey, changedKey);
    }

    /**
     * @summary Restructures an object into a TbpDataTransferServer
     * @description
     *
     * This takes an `object` and converts it to a `TbpDataTransferServer`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `TbpDataTransferServer`.
     * @returns {TbpDataTransferServer}
     */
    public static override _from_object(
        _o: { [_K in keyof TbpDataTransferServer]: TbpDataTransferServer[_K] }
    ): TbpDataTransferServer {
        return new TbpDataTransferServer(
            _o.invokeID,
            _o.assoID,
            _o.time,
            _o.seq,
            _o.reqRekey,
            _o.changedKey,
            _o.encInvoke,
            _o.conf,
            _o._unrecognizedExtensionsList
        );
    }

    /**
     * @summary Getter that returns the default value for `reqRekey`.
     * @public
     * @static
     * @method
     */
    public static override get _default_value_for_reqRekey(): BOOLEAN {
        return false;
    }
    /**
     * @summary Getter that returns the default value for `changedKey`.
     * @public
     * @static
     * @method
     */
    public static override get _default_value_for_changedKey(): BOOLEAN {
        return false;
    }
}

/**
 * @summary The Leading Root Component Types of TbpDataTransferServer
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_TbpDataTransferServer: $.ComponentSpec[] = [
    ..._root_component_type_list_1_spec_for_AadServer,
    new $.ComponentSpec("conf", false, $.hasAnyTag),
];

/**
 * @summary The Trailing Root Component Types of TbpDataTransferServer
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_TbpDataTransferServer: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of TbpDataTransferServer
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_TbpDataTransferServer: $.ComponentSpec[] = [];

let _cached_decoder_for_TbpDataTransferServer: $.ASN1Decoder<TbpDataTransferServer> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TbpDataTransferServer
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TbpDataTransferServer} The decoded data structure.
 */
export function _decode_TbpDataTransferServer(el: _Element): TbpDataTransferServer {
    if (!_cached_decoder_for_TbpDataTransferServer) {
        _cached_decoder_for_TbpDataTransferServer = function (
            el: _Element
        ): TbpDataTransferServer {
            let invokeID: OPTIONAL<InvokeID>;
            let assoID!: AssoID;
            let time!: TimeStamp;
            let seq!: SequenceNumber;
            let reqRekey: OPTIONAL<BOOLEAN> =
                TbpDataTransferServer._default_value_for_reqRekey;
            let changedKey: OPTIONAL<BOOLEAN> =
                TbpDataTransferServer._default_value_for_changedKey;
            let encInvoke: OPTIONAL<AlgoInvoke>;
            let conf!: TbpDataTransferServer_conf;
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
                reqRekey: (_el: _Element): void => {
                    reqRekey = $._decode_implicit<BOOLEAN>(
                        () => $._decodeBoolean
                    )(_el);
                },
                changedKey: (_el: _Element): void => {
                    changedKey = $._decode_implicit<BOOLEAN>(
                        () => $._decodeBoolean
                    )(_el);
                },
                encInvoke: (_el: _Element): void => {
                    encInvoke = $._decode_implicit<AlgoInvoke>(
                        () => _decode_AlgoInvoke
                    )(_el);
                },
                conf: (_el: _Element): void => {
                    conf = _decode_TbpDataTransferServer_conf(_el);
                },
            };
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_TbpDataTransferServer,
                _extension_additions_list_spec_for_TbpDataTransferServer,
                _root_component_type_list_2_spec_for_TbpDataTransferServer,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new TbpDataTransferServer(
                invokeID,
                assoID,
                time,
                seq,
                reqRekey,
                changedKey,
                encInvoke,
                conf,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_TbpDataTransferServer(el);
}

let _cached_encoder_for_TbpDataTransferServer: $.ASN1Encoder<TbpDataTransferServer> | null = null;

/**
 * @summary Encodes a(n) TbpDataTransferServer into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TbpDataTransferServer, encoded as an ASN.1 Element.
 */
export function _encode_TbpDataTransferServer(
    value: TbpDataTransferServer,
    elGetter: $.ASN1Encoder<TbpDataTransferServer>
): _Element {
    if (!_cached_encoder_for_TbpDataTransferServer) {
        _cached_encoder_for_TbpDataTransferServer = function (
            value: TbpDataTransferServer        ): _Element {
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
                            /* IF_DEFAULT */ value.reqRekey === undefined ||
                            $.deepEq(
                                value.reqRekey,
                                TbpDataTransferServer._default_value_for_reqRekey
                            )
                                ? undefined
                                : $._encode_implicit(
                                      _TagClass.context,
                                      1,
                                      () => $._encodeBoolean,
                                      $.DER
                                  )(value.reqRekey, $.DER),
                            /* IF_DEFAULT */ value.changedKey === undefined ||
                            $.deepEq(
                                value.changedKey,
                                TbpDataTransferServer._default_value_for_changedKey
                            )
                                ? undefined
                                : $._encode_implicit(
                                      _TagClass.context,
                                      2,
                                      () => $._encodeBoolean,
                                      $.DER
                                  )(value.changedKey, $.DER),
                            /* IF_ABSENT  */ value.encInvoke === undefined
                                ? undefined
                                : $._encode_implicit(
                                      _TagClass.context,
                                      3,
                                      () => _encode_AlgoInvoke,
                                      $.DER
                                  )(value.encInvoke, $.DER),
                            /* REQUIRED   */ _encode_TbpDataTransferServer_conf(
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
    return _cached_encoder_for_TbpDataTransferServer(value, elGetter);
}


/* eslint-enable */
