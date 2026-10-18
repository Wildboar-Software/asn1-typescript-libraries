/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { ProtocolVersion, _decode_ProtocolVersion, _encode_ProtocolVersion, _enum_for_ProtocolVersion } from "../PCESP/ProtocolVersion.ta.mjs";
// export { ProtocolVersion, _enum_for_ProtocolVersion, ProtocolVersion_v3 /* IMPORTED_LONG_ENUMERATION_ITEM */, v3 /* IMPORTED_SHORT_ENUMERATION_ITEM */, ProtocolVersion_v4 /* IMPORTED_LONG_ENUMERATION_ITEM */, v4 /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ProtocolVersion, _encode_ProtocolVersion } from "../PCESP/ProtocolVersion.ta.mjs";
import { Message, _decode_Message, _encode_Message } from "../PCESP/Message.ta.mjs";
// export { Message, _decode_Message, _encode_Message } from "../PCESP/Message.ta.mjs";


/**
 * @summary CdcPdu
 * @description
 *
 * One PCESP call-data PDU: a protocol version and one `Message`.
 *
 * Module `TS101909201` imports this type and carries it as the
 * `cdcPdu` alternative of `UserSignalType` on
 * `TARGETACTIVITYMONITOR-1` (annex A). Annex A, note 2, assumes the
 * Lawful Interception Mediation Function receives the PCESP module in
 * BER and exports it in `TARGETACTIVITYMONITOR` before delivery to the
 * LEMF. Clause 5.1 requires that, when INI2 arrives in DER, the
 * mediation function decode it and re-encode with BER for HI2.
 *
 * Clause 8.4.2 prints a different `TARGETACTIVITYMONITOR`, with
 * `iRIMessageBER` and `iRIMessageDER` from a module named
 * `IPCableComIRI`, and says the user signal is by default a bit-exact
 * copy. The normative module in annex A does not contain those two
 * fields; it carries `CdcPdu` inside `UserSignalType`.
 *
 * ETSI TS 101 909-20-1 V1.1.2 (2005-10), clause 5.1, clause 8.4.2,
 * and annex A.
 *
 * https://www.etsi.org/deliver/etsi_ts/101900_101999/1019092001/01.01.02_60/ts_1019092001v010102p.pdf
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CdcPdu ::= SEQUENCE {
 *     protocolVersion         [0] ProtocolVersion,
 *     message                 [1] Message,
 *     ...
 * }
 * ```
 * 
 * @class
 */
export
class CdcPdu {
    /**
     * @summary `protocolVersion`.
     * @description
     *
     * `v3` for PacketCable Electronic Surveillance Specification I03,
     * or `v4` for I04. Versions IO1 and IO2 are not represented; the
     * module comment says they do not support protocol versioning.
     *
     * ETSI TS 101 909-20-1 V1.1.2 (2005-10), annex A.
     *
     * @public
     * @readonly
     */
    readonly protocolVersion: ProtocolVersion;
    /**
     * @summary `message`.
     * @description
     *
     * The surveillance message. Annex A does not define which event
     * each alternative reports. See `Message`.
     *
     * ETSI TS 101 909-20-1 V1.1.2 (2005-10), annex A.
     *
     * @public
     * @readonly
     */
    readonly message: Message;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        protocolVersion: ProtocolVersion,
        message: Message,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.protocolVersion = protocolVersion;
        this.message = message;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a CdcPdu
     * @description
     * 
     * This takes an `object` and converts it to a `CdcPdu`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CdcPdu`.
     * @returns {CdcPdu}
     */
    public static _from_object (_o: { [_K in keyof (CdcPdu)]: (CdcPdu)[_K] }): CdcPdu {
        return new CdcPdu(_o.protocolVersion, _o.message, _o._unrecognizedExtensionsList);
    }

        /**
         * @summary The enum used as the type of the component `protocolVersion`
         * @public
         * @static
         */

    public static _enum_for_protocolVersion = _enum_for_ProtocolVersion;
}

/**
 * @summary The Leading Root Component Types of CdcPdu
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_CdcPdu: $.ComponentSpec[] = [
    new $.ComponentSpec("protocolVersion", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("message", false, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of CdcPdu
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_CdcPdu: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of CdcPdu
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_CdcPdu: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_CdcPdu: $.ASN1Decoder<CdcPdu> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CdcPdu
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CdcPdu (el: _Element): CdcPdu {
    if (!_cached_decoder_for_CdcPdu) { _cached_decoder_for_CdcPdu = function (el: _Element): CdcPdu {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("CdcPdu contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "protocolVersion";
    sequence[1].name = "message";
    let protocolVersion!: ProtocolVersion;
    let message!: Message;
    protocolVersion = $._decode_implicit<ProtocolVersion>(() => _decode_ProtocolVersion)(sequence[0]);
    message = $._decode_explicit<Message>(() => _decode_Message)(sequence[1]);
    return new CdcPdu(
        protocolVersion,
        message,
        sequence.slice(2),
    );
}; }
    return _cached_decoder_for_CdcPdu(el);
}

let _cached_encoder_for_CdcPdu: $.ASN1Encoder<CdcPdu> | null = null;

/**
 * @summary Encodes a(n) CdcPdu into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CdcPdu, encoded as an ASN.1 Element.
 */
export
function _encode_CdcPdu (value: CdcPdu, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CdcPdu) { _cached_encoder_for_CdcPdu = function (value: CdcPdu, elGetter: $.ASN1Encoder<CdcPdu>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(2 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_ProtocolVersion, $.BER)(value.protocolVersion, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_explicit(_TagClass.context, 1, () => _encode_Message, $.BER)(value.message, $.BER);
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_CdcPdu(value, elGetter);
}


/* eslint-enable */
