/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    BOOLEAN,
    OPTIONAL,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
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
 * @summary AadServer
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AadServer ::= SEQUENCE {
 *   invokeID   [0] InvokeID OPTIONAL,
 *   assoID         AssoID,
 *   time           TimeStamp,
 *   seq            SequenceNumber,
 *   reqRekey   [1] BOOLEAN DEFAULT FALSE,
 *   changedKey [2] BOOLEAN DEFAULT FALSE }
 * ```
 *
 * @class
 */
export class AadServer {
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
         * @summary `reqRekey`.
         * @public
         * @readonly
         */
        readonly reqRekey: OPTIONAL<BOOLEAN>,
        /**
         * @summary `changedKey`.
         * @public
         * @readonly
         */
        readonly changedKey: OPTIONAL<BOOLEAN>
    ) {}

    /**
     * @summary Restructures an object into a AadServer
     * @description
     *
     * This takes an `object` and converts it to a `AadServer`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AadServer`.
     * @returns {AadServer}
     */
    public static _from_object(
        _o: { [_K in keyof AadServer]: AadServer[_K] }
    ): AadServer {
        return new AadServer(
            _o.invokeID,
            _o.assoID,
            _o.time,
            _o.seq,
            _o.reqRekey,
            _o.changedKey
        );
    }

    /**
     * @summary Getter that returns the default value for `reqRekey`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_reqRekey(): BOOLEAN {
        return false;
    }
    /**
     * @summary Getter that returns the default value for `changedKey`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_changedKey(): BOOLEAN {
        return false;
    }
}

/**
 * @summary The Leading Root Component Types of AadServer
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_AadServer: $.ComponentSpec[] = [
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
        "reqRekey",
        true,
        $.hasTag(_TagClass.context, 1)
    ),
    new $.ComponentSpec(
        "changedKey",
        true,
        $.hasTag(_TagClass.context, 2)
    ),
];

/**
 * @summary The Trailing Root Component Types of AadServer
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_AadServer: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of AadServer
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_AadServer: $.ComponentSpec[] = [];

let _cached_decoder_for_AadServer: $.ASN1Decoder<AadServer> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AadServer
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AadServer} The decoded data structure.
 */
export function _decode_AadServer(el: _Element): AadServer {
    if (!_cached_decoder_for_AadServer) {
        _cached_decoder_for_AadServer = function (el: _Element): AadServer {
            let invokeID: OPTIONAL<InvokeID>;
            let assoID!: AssoID;
            let time!: TimeStamp;
            let seq!: SequenceNumber;
            let reqRekey: OPTIONAL<BOOLEAN> =
                AadServer._default_value_for_reqRekey;
            let changedKey: OPTIONAL<BOOLEAN> =
                AadServer._default_value_for_changedKey;
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
            };
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_AadServer,
                _extension_additions_list_spec_for_AadServer,
                _root_component_type_list_2_spec_for_AadServer,
                undefined
            );
            return new AadServer(
                invokeID,
                assoID,
                time,
                seq,
                reqRekey,
                changedKey
            );
        };
    }
    return _cached_decoder_for_AadServer(el);
}

let _cached_encoder_for_AadServer: $.ASN1Encoder<AadServer> | null = null;

/**
 * @summary Encodes a(n) AadServer into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AadServer, encoded as an ASN.1 Element.
 */
export function _encode_AadServer(
    value: AadServer,
    elGetter: $.ASN1Encoder<AadServer>
): _Element {
    if (!_cached_encoder_for_AadServer) {
        _cached_encoder_for_AadServer = function (
            value: AadServer        ): _Element {
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
                        /* IF_DEFAULT */ value.reqRekey === undefined ||
                        $.deepEq(
                            value.reqRekey,
                            AadServer._default_value_for_reqRekey
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
                            AadServer._default_value_for_changedKey
                        )
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  2,
                                  () => $._encodeBoolean,
                                  $.DER
                              )(value.changedKey, $.DER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.DER
            );
        };
    }
    return _cached_encoder_for_AadServer(value, elGetter);
}


/* eslint-enable */
