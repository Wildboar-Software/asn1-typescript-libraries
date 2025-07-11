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
    TimeStamp,
    _decode_TimeStamp,
    _encode_TimeStamp,
} from "../Wrapper/TimeStamp.ta.mjs";
/**
 * @summary AadClient
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AadClient ::= SEQUENCE {
 *   invokeID [0] InvokeID OPTIONAL,
 *   assoID       AssoID,
 *   time         TimeStamp,
 *   seq          SequenceNumber,
 *   keyEst   [2] AlgoInvoke{{SupportedKeyEstablishmentAlgos}} OPTIONAL }
 * ```
 *
 */
export class AadClient {
    constructor(
        /**
         * @summary `invokeID`.
         * @public
         * @readonly
         */
        readonly invokeID: OPTIONAL<InvokeID>,
        /**
         * @summary `assoID`.
         * @public
         * @readonly
         */
        readonly assoID: AssoID,
        /**
         * @summary `time`.
         * @public
         * @readonly
         */
        readonly time: TimeStamp,
        /**
         * @summary `seq`.
         * @public
         * @readonly
         */
        readonly seq: SequenceNumber,
        /**
         * @summary `keyEst`.
         * @public
         * @readonly
         */
        readonly keyEst: OPTIONAL<AlgoInvoke>
    ) {}

    /**
     * @summary Restructures an object into a AadClient
     * @description
     *
     * This takes an `object` and converts it to a `AadClient`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AadClient`.
     * @returns {AadClient}
     */
    public static _from_object(
        _o: { [_K in keyof AadClient]: AadClient[_K] }
    ): AadClient {
        return new AadClient(
            _o.invokeID,
            _o.assoID,
            _o.time,
            _o.seq,
            _o.keyEst
        );
    }
}

/**
 * @summary The Leading Root Component Types of AadClient
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_AadClient: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "invokeID",
        true,
        $.hasTag(_TagClass.context, 0)
    ),
    new $.ComponentSpec(
        "assoID",
        false,
        $.hasTag(_TagClass.universal, 2)
    ),
    new $.ComponentSpec(
        "time",
        false,
        $.hasTag(_TagClass.universal, 24)
    ),
    new $.ComponentSpec(
        "seq",
        false,
        $.hasTag(_TagClass.universal, 2)
    ),
    new $.ComponentSpec(
        "keyEst",
        true,
        $.hasTag(_TagClass.context, 2)
    ),
];

/**
 * @summary The Trailing Root Component Types of AadClient
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_AadClient: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of AadClient
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_AadClient: $.ComponentSpec[] = [];

let _cached_decoder_for_AadClient: $.ASN1Decoder<AadClient> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AadClient
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AadClient} The decoded data structure.
 */
export function _decode_AadClient(el: _Element): AadClient {
    if (!_cached_decoder_for_AadClient) {
        _cached_decoder_for_AadClient = function (el: _Element): AadClient {
            let invokeID: OPTIONAL<InvokeID>;
            let assoID!: AssoID;
            let time!: TimeStamp;
            let seq!: SequenceNumber;
            let keyEst: OPTIONAL<AlgoInvoke>;
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
            };
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_AadClient,
                _extension_additions_list_spec_for_AadClient,
                _root_component_type_list_2_spec_for_AadClient,
                undefined
            );
            return new AadClient(
                invokeID,
                assoID,
                time,
                seq,
                keyEst
            );
        };
    }
    return _cached_decoder_for_AadClient(el);
}

let _cached_encoder_for_AadClient: $.ASN1Encoder<AadClient> | null = null;

/**
 * @summary Encodes a(n) AadClient into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AadClient, encoded as an ASN.1 Element.
 */
export function _encode_AadClient(
    value: AadClient,
    elGetter: $.ASN1Encoder<AadClient>
): _Element {
    if (!_cached_encoder_for_AadClient) {
        _cached_encoder_for_AadClient = function (
            value: AadClient        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* IF_ABSENT  */ value.invokeID === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  0,
                                  () => _encode_InvokeID,
                                  $.DER
                              )(value.invokeID, $.DER),
                        /* REQUIRED   */ _encode_AssoID(value.assoID, $.DER),
                        /* REQUIRED   */ _encode_TimeStamp(value.time, $.DER),
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
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.DER
            );
        };
    }
    return _cached_encoder_for_AadClient(value, elGetter);
}


/* eslint-enable */
