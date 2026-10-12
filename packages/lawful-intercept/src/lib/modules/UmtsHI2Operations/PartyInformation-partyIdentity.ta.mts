/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OCTET_STRING,
    OPTIONAL
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary PartyInformation_partyIdentity
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PartyInformation-partyIdentity ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @class
 */
export
class PartyInformation_partyIdentity {
    /**
     * @summary `imei`.
     * @public
     * @readonly
     */
    readonly imei: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `imsi`.
     * @public
     * @readonly
     */
    readonly imsi: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `msISDN`.
     * @public
     * @readonly
     */
    readonly msISDN: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `e164_Format`.
     * @public
     * @readonly
     */
    readonly e164_Format: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `sip_uri`.
     * @public
     * @readonly
     */
    readonly sip_uri: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `tel_uri`.
     * @public
     * @readonly
     */
    readonly tel_uri: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `x_3GPP_Asserted_Identity`.
     * @public
     * @readonly
     */
    readonly x_3GPP_Asserted_Identity: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `xUI`.
     * @public
     * @readonly
     */
    readonly xUI: OPTIONAL<OCTET_STRING>;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        imei: OPTIONAL<OCTET_STRING>,
        imsi: OPTIONAL<OCTET_STRING>,
        msISDN: OPTIONAL<OCTET_STRING>,
        e164_Format: OPTIONAL<OCTET_STRING>,
        sip_uri: OPTIONAL<OCTET_STRING>,
        tel_uri: OPTIONAL<OCTET_STRING>,
        x_3GPP_Asserted_Identity: OPTIONAL<OCTET_STRING>,
        xUI: OPTIONAL<OCTET_STRING>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.imei = imei;
        this.imsi = imsi;
        this.msISDN = msISDN;
        this.e164_Format = e164_Format;
        this.sip_uri = sip_uri;
        this.tel_uri = tel_uri;
        this.x_3GPP_Asserted_Identity = x_3GPP_Asserted_Identity;
        this.xUI = xUI;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a PartyInformation_partyIdentity
     * @description
     * 
     * This takes an `object` and converts it to a `PartyInformation_partyIdentity`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `PartyInformation_partyIdentity`.
     * @returns {PartyInformation_partyIdentity}
     */
    public static _from_object (_o: { [_K in keyof (PartyInformation_partyIdentity)]: (PartyInformation_partyIdentity)[_K] }): PartyInformation_partyIdentity {
        return new PartyInformation_partyIdentity(_o.imei, _o.imsi, _o.msISDN, _o.e164_Format, _o.sip_uri, _o.tel_uri, _o.x_3GPP_Asserted_Identity, _o.xUI, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of PartyInformation_partyIdentity
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_PartyInformation_partyIdentity: $.ComponentSpec[] = [
    new $.ComponentSpec("imei", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("imsi", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("msISDN", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("e164-Format", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("sip-uri", true, $.hasTag(_TagClass.context, 8))
];

/**
 * @summary The Trailing Root Component Types of PartyInformation_partyIdentity
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_PartyInformation_partyIdentity: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of PartyInformation_partyIdentity
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_PartyInformation_partyIdentity: $.ComponentSpec[] = [
    new $.ComponentSpec("tel-uri", true, $.hasTag(_TagClass.context, 9)),
    new $.ComponentSpec("x-3GPP-Asserted-Identity", true, $.hasTag(_TagClass.context, 10)),
    new $.ComponentSpec("xUI", true, $.hasTag(_TagClass.context, 11))
];

let _cached_decoder_for_PartyInformation_partyIdentity: $.ASN1Decoder<PartyInformation_partyIdentity> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PartyInformation_partyIdentity
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PartyInformation_partyIdentity (el: _Element): PartyInformation_partyIdentity {
    if (!_cached_decoder_for_PartyInformation_partyIdentity) { _cached_decoder_for_PartyInformation_partyIdentity = function (el: _Element): PartyInformation_partyIdentity {
    let imei: OPTIONAL<OCTET_STRING>;
    let imsi: OPTIONAL<OCTET_STRING>;
    let msISDN: OPTIONAL<OCTET_STRING>;
    let e164_Format: OPTIONAL<OCTET_STRING>;
    let sip_uri: OPTIONAL<OCTET_STRING>;
    let tel_uri: OPTIONAL<OCTET_STRING>;
    let x_3GPP_Asserted_Identity: OPTIONAL<OCTET_STRING>;
    let xUI: OPTIONAL<OCTET_STRING>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "imei": (_el: _Element): void => { imei = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "imsi": (_el: _Element): void => { imsi = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "msISDN": (_el: _Element): void => { msISDN = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "e164-Format": (_el: _Element): void => { e164_Format = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "sip-uri": (_el: _Element): void => { sip_uri = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "tel-uri": (_el: _Element): void => { tel_uri = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "x-3GPP-Asserted-Identity": (_el: _Element): void => { x_3GPP_Asserted_Identity = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "xUI": (_el: _Element): void => { xUI = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_PartyInformation_partyIdentity,
        _extension_additions_list_spec_for_PartyInformation_partyIdentity,
        _root_component_type_list_2_spec_for_PartyInformation_partyIdentity,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new PartyInformation_partyIdentity(
        imei,
        imsi,
        msISDN,
        e164_Format,
        sip_uri,
        tel_uri,
        x_3GPP_Asserted_Identity,
        xUI,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_PartyInformation_partyIdentity(el);
}

let _cached_encoder_for_PartyInformation_partyIdentity: $.ASN1Encoder<PartyInformation_partyIdentity> | null = null;

/**
 * @summary Encodes a(n) PartyInformation_partyIdentity into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PartyInformation_partyIdentity, encoded as an ASN.1 Element.
 */
export
function _encode_PartyInformation_partyIdentity (value: PartyInformation_partyIdentity, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PartyInformation_partyIdentity) { _cached_encoder_for_PartyInformation_partyIdentity = function (value: PartyInformation_partyIdentity, elGetter: $.ASN1Encoder<PartyInformation_partyIdentity>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(8 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    if (value.imei !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => $._encodeOctetString, $.BER)(value.imei, $.BER);
    }
    if (value.imsi !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => $._encodeOctetString, $.BER)(value.imsi, $.BER);
    }
    if (value.msISDN !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 6, () => $._encodeOctetString, $.BER)(value.msISDN, $.BER);
    }
    if (value.e164_Format !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 7, () => $._encodeOctetString, $.BER)(value.e164_Format, $.BER);
    }
    if (value.sip_uri !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 8, () => $._encodeOctetString, $.BER)(value.sip_uri, $.BER);
    }
    if (value.tel_uri !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 9, () => $._encodeOctetString, $.BER)(value.tel_uri, $.BER);
    }
    if (value.x_3GPP_Asserted_Identity !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 10, () => $._encodeOctetString, $.BER)(value.x_3GPP_Asserted_Identity, $.BER);
    }
    if (value.xUI !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 11, () => $._encodeOctetString, $.BER)(value.xUI, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_PartyInformation_partyIdentity(value, elGetter);
}


/* eslint-enable */
