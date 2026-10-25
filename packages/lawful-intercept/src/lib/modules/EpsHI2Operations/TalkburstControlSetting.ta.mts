/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    type INTEGER,
    type UTF8String,
    type VisibleString,
    ASN1OverflowError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary TalkburstControlSetting
 * @description
 * 
 * Talk-burst control protocol selection for a PTC session. Clause 17.2.14
 * defines floor control as talk-burst control and points at OMA-PoC-AD and
 * OMA-PoC user plane, and it does not name this parameter. The module says the
 * parameter set is what the PTC server selected from the SDP offer in the
 * incoming SIP INVITE from the PTC client, and that the port is the PTC
 * server's port for the talk-burst control protocol.
 * 
 * 3GPP TS 33.108 (https://www.3gpp.org/DynaReport/33108.htm).
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TalkburstControlSetting ::= SEQUENCE
 * {
 *     talk-BurstControlProtocol    [1] UTF8String,
 *     talk-Burst-parameters        [2] SET OF VisibleString,
 *     -- selected by the PTC Server from those contained in the original SDP offer in the
 *     -- incoming SIP INVITE request from the PTC Client
 *     tBCP-PortNumber             [3] INTEGER (0..65535),
 *     -- PTC Server's port number to be used for the Talk Burst Control Protocol
 * ...
 * }
 * ```
 * 
 * @class
 */
export
class TalkburstControlSetting {
    /**
     * @summary `talk_BurstControlProtocol`.
     * @description
     * 
     * Talk-burst control protocol for the session. Clause 17.2.14 identifies
     * that protocol with floor control and cites OMA-PoC-AD and the OMA-PoC
     * user plane. The handover text does not define the contents of this
     * string.
     * @public
     * @readonly
     */
    readonly talk_BurstControlProtocol: UTF8String;
    /**
     * @summary `talk_Burst_parameters`.
     * @description
     * 
     * Talk-burst parameters the PTC server selected from those in the SDP offer
     * of the incoming SIP INVITE from the PTC client (module comment).
     * @public
     * @readonly
     */
    readonly talk_Burst_parameters: VisibleString[];
    /**
     * @summary `tBCP_PortNumber`.
     * @description
     * 
     * PTC server port for the talk-burst control protocol, from 0 to 65535
     * (module comment).
     * @public
     * @readonly
     */
    readonly tBCP_PortNumber: INTEGER;
    /**
     * @summary Extensions that are not recognized.
     * @description
     * 
     * The specification does not define these components.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        talk_BurstControlProtocol: UTF8String,
        talk_Burst_parameters: VisibleString[],
        tBCP_PortNumber: INTEGER,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.talk_BurstControlProtocol = talk_BurstControlProtocol;
        this.talk_Burst_parameters = talk_Burst_parameters;
        this.tBCP_PortNumber = tBCP_PortNumber;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a TalkburstControlSetting
     * @description
     * 
     * This takes an `object` and converts it to a `TalkburstControlSetting`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `TalkburstControlSetting`.
     * @returns {TalkburstControlSetting}
     */
    public static _from_object (_o: { [_K in keyof (TalkburstControlSetting)]: (TalkburstControlSetting)[_K] }): TalkburstControlSetting {
        return new TalkburstControlSetting(_o.talk_BurstControlProtocol, _o.talk_Burst_parameters, _o.tBCP_PortNumber, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of TalkburstControlSetting
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_TalkburstControlSetting: $.ComponentSpec[] = [
    new $.ComponentSpec("talk-BurstControlProtocol", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("talk-Burst-parameters", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("tBCP-PortNumber", false, $.hasTag(_TagClass.context, 3))
];

/**
 * @summary The Trailing Root Component Types of TalkburstControlSetting
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_TalkburstControlSetting: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of TalkburstControlSetting
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_TalkburstControlSetting: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_TalkburstControlSetting: $.ASN1Decoder<TalkburstControlSetting> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TalkburstControlSetting
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_TalkburstControlSetting (el: _Element): TalkburstControlSetting {
    if (!_cached_decoder_for_TalkburstControlSetting) { _cached_decoder_for_TalkburstControlSetting = function (el: _Element): TalkburstControlSetting {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 3) {
        throw new _ConstructionError("TalkburstControlSetting contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "talk-BurstControlProtocol";
    sequence[1].name = "talk-Burst-parameters";
    sequence[2].name = "tBCP-PortNumber";
    let talk_BurstControlProtocol!: UTF8String;
    let talk_Burst_parameters!: VisibleString[];
    let tBCP_PortNumber!: INTEGER;
    talk_BurstControlProtocol = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(sequence[0]);
    talk_Burst_parameters = $._decode_implicit<VisibleString[]>(() => $._decodeSetOf<VisibleString>(() => $._decodeVisibleString))(sequence[1]);
    tBCP_PortNumber = $._decode_implicit<INTEGER>(() => $._decodeInteger)(sequence[2]);
    {
        const _n = typeof tBCP_PortNumber === "bigint" ? tBCP_PortNumber : BigInt(tBCP_PortNumber);
        if (_n < 0n || _n > 65535n) {
            throw new ASN1OverflowError("TalkburstControlSetting.tBCP_PortNumber violates INTEGER range");
        }
    }
    return new TalkburstControlSetting(
        talk_BurstControlProtocol,
        talk_Burst_parameters,
        tBCP_PortNumber,
        sequence.slice(3),
    );
}; }
    return _cached_decoder_for_TalkburstControlSetting(el);
}

let _cached_encoder_for_TalkburstControlSetting: $.ASN1Encoder<TalkburstControlSetting> | null = null;

/**
 * @summary Encodes a(n) TalkburstControlSetting into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TalkburstControlSetting, encoded as an ASN.1 Element.
 */
export
function _encode_TalkburstControlSetting (value: TalkburstControlSetting, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_TalkburstControlSetting) { _cached_encoder_for_TalkburstControlSetting = function (value: TalkburstControlSetting, elGetter: $.ASN1Encoder<TalkburstControlSetting>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(3 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeUTF8String, $.BER)(value.talk_BurstControlProtocol, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => $._encodeSetOf<VisibleString>(() => $._encodeVisibleString, $.BER), $.BER)(value.talk_Burst_parameters, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => $._encodeInteger, $.BER)(value.tBCP_PortNumber, $.BER);
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_TalkburstControlSetting(value, elGetter);
}


/* eslint-enable */
