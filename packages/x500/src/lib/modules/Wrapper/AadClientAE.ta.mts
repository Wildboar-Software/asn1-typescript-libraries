/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OPTIONAL,
} from "asn1-ts";
import * as $ from "@wildboar/asn1/functional";
import {
    AlgoInvoke,
    _decode_AlgoInvoke,
    _encode_AlgoInvoke,
} from "@wildboar/pki-stub/src/lib/modules/PKI-Stub/AlgoInvoke.ta.mjs";
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
    TimeStamp,
    _decode_TimeStamp,
    _encode_TimeStamp,
} from "../Wrapper/TimeStamp.ta.mjs";
import {
    AadClient,
    _root_component_type_list_1_spec_for_AadClient,
} from "../Wrapper/AadClient.ta.mjs";

/**
 * @summary AadClientAE
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AadClientAE ::= SEQUENCE {
 *   COMPONENTS OF    AadClient,
 *   encInvoke    [3] AlgoInvoke{{SupportedAeadAlgorithms}} OPTIONAL,
 *   ... }
 * ```
 *
 * @class
 */
export class AadClientAE extends AadClient {
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
         * @summary `encInvoke`.
         * @public
         * @readonly
         */
        readonly encInvoke: OPTIONAL<AlgoInvoke>,
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
     * @summary Restructures an object into a AadClientAE
     * @description
     *
     * This takes an `object` and converts it to a `AadClientAE`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AadClientAE`.
     * @returns {AadClientAE}
     */
    public static override _from_object(
        _o: { [_K in keyof AadClientAE]: AadClientAE[_K] }
    ): AadClientAE {
        return new AadClientAE(
            _o.invokeID,
            _o.assoID,
            _o.time,
            _o.seq,
            _o.keyEst,
            _o.encInvoke,
            _o._unrecognizedExtensionsList
        );
    }
}

/**
 * @summary The Leading Root Component Types of AadClientAE
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_AadClientAE: $.ComponentSpec[] = [
    ..._root_component_type_list_1_spec_for_AadClient,
    new $.ComponentSpec(
        "encInvoke",
        true,
        $.hasTag(_TagClass.context, 3)
    ),
];

/**
 * @summary The Trailing Root Component Types of AadClientAE
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_AadClientAE: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of AadClientAE
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_AadClientAE: $.ComponentSpec[] = [];

let _cached_decoder_for_AadClientAE: $.ASN1Decoder<AadClientAE> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AadClientAE
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AadClientAE} The decoded data structure.
 */
export function _decode_AadClientAE(el: _Element) {
    if (!_cached_decoder_for_AadClientAE) {
        _cached_decoder_for_AadClientAE = function (el: _Element): AadClientAE {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let invokeID: OPTIONAL<InvokeID>;
            let assoID!: AssoID;
            let time!: TimeStamp;
            let seq!: SequenceNumber;
            let keyEst: OPTIONAL<AlgoInvoke>;
            let encInvoke: OPTIONAL<AlgoInvoke>;
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
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
                encInvoke: (_el: _Element): void => {
                    encInvoke = $._decode_implicit<AlgoInvoke>(
                        () => _decode_AlgoInvoke
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_AadClientAE,
                _extension_additions_list_spec_for_AadClientAE,
                _root_component_type_list_2_spec_for_AadClientAE,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new AadClientAE(
                /* SEQUENCE_CONSTRUCTOR_CALL */ invokeID,
                assoID,
                time,
                seq,
                keyEst,
                encInvoke,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_AadClientAE(el);
}

let _cached_encoder_for_AadClientAE: $.ASN1Encoder<AadClientAE> | null = null;

/**
 * @summary Encodes a(n) AadClientAE into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AadClientAE, encoded as an ASN.1 Element.
 */
export function _encode_AadClientAE(
    value: AadClientAE,
    elGetter: $.ASN1Encoder<AadClientAE>
) {
    if (!_cached_encoder_for_AadClientAE) {
        _cached_encoder_for_AadClientAE = function (
            value: AadClientAE        ): _Element {
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
                            /* IF_ABSENT  */ value.encInvoke === undefined
                                ? undefined
                                : $._encode_implicit(
                                      _TagClass.context,
                                      3,
                                      () => _encode_AlgoInvoke,
                                      $.DER
                                  )(value.encInvoke, $.DER),
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
    return _cached_encoder_for_AadClientAE(value, elGetter);
}


/* eslint-enable */
