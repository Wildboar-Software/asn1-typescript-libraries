/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OCTET_STRING,
    OPTIONAL,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary PartyInformation_partyIdentity
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PartyInformation-partyIdentity ::= SEQUENCE
 * {
 *     imsi                    [2] OCTET STRING (SIZE (3..8)) OPTIONAL,
 *     -- See MAP format [4] International Mobile
 *     -- Station Identity E.212 number beginning with Mobile Country Code
 *     msISDN                    [3] OCTET STRING (SIZE (1..9)) OPTIONAL,
 *     -- MSISDN of the target, encoded in the same format as the AddressString
 *     -- parameters defined in MAP format document TS 29.002 [4]
 *     nai                        [7]  OCTET STRING  OPTIONAL,
 *     -- NAI of the target, encoded in the same format as
 *     -- defined in 3GPP TS 29.234 [41].
 *     ...
 * }
 * ```
 * 
 * @class
 */
export
class PartyInformation_partyIdentity {
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
     * @summary `nai`.
     * @public
     * @readonly
     */
    readonly nai: OPTIONAL<OCTET_STRING>;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        imsi: OPTIONAL<OCTET_STRING>,
        msISDN: OPTIONAL<OCTET_STRING>,
        nai: OPTIONAL<OCTET_STRING>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.imsi = imsi;
        if (this.imsi !== undefined && (this.imsi.length < 3 || this.imsi.length > 8)) {
            throw new ASN1SizeError("imsi violates the SIZE constraint");
        }
        this.msISDN = msISDN;
        if (this.msISDN !== undefined && (this.msISDN.length < 1 || this.msISDN.length > 9)) {
            throw new ASN1SizeError("msISDN violates the SIZE constraint");
        }
        this.nai = nai;
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
        return new PartyInformation_partyIdentity(_o.imsi, _o.msISDN, _o.nai, _o._unrecognizedExtensionsList);
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
    new $.ComponentSpec("imsi", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("msISDN", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("nai", true, $.hasTag(_TagClass.context, 7))
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
    let imsi: OPTIONAL<OCTET_STRING>;
    let msISDN: OPTIONAL<OCTET_STRING>;
    let nai: OPTIONAL<OCTET_STRING>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "imsi": (_el: _Element): void => { imsi = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "msISDN": (_el: _Element): void => { msISDN = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "nai": (_el: _Element): void => { nai = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_PartyInformation_partyIdentity,
        _extension_additions_list_spec_for_PartyInformation_partyIdentity,
        _root_component_type_list_2_spec_for_PartyInformation_partyIdentity,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new PartyInformation_partyIdentity(
        imsi,
        msISDN,
        nai,
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
    if (!_cached_encoder_for_PartyInformation_partyIdentity) { _cached_encoder_for_PartyInformation_partyIdentity = function (value: PartyInformation_partyIdentity, _elGetter: $.ASN1Encoder<PartyInformation_partyIdentity>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(3 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    if (value.imsi !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => $._encodeOctetString, $.BER)(value.imsi, $.BER);
    }
    if (value.msISDN !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => $._encodeOctetString, $.BER)(value.msISDN, $.BER);
    }
    if (value.nai !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 7, () => $._encodeOctetString, $.BER)(value.nai, $.BER);
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
