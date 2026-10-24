/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    type INTEGER,
    type OCTET_STRING,
    type OPTIONAL,
    ASN1OverflowError,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary EPS_DSMIP_SpecificParameters
 * @description
 * 
 * DSMIP parameters of the intercepted procedure. Coded according to 3GPP TS
 * 24.303 and the RFCs it cites (module comment). Carried when the IRI is a
 * DSMIP registration, deregistration, session modification, home-agent switch,
 * or start of interception with an active DSMIP tunnel (clause 10.5.1). 3GPP TS
 * 33.108 (https://www.3gpp.org/DynaReport/33108.htm).
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EPS-DSMIP-SpecificParameters ::= SEQUENCE
 * {
 *     lifetime                              [1]   INTEGER (0..65535)                type OPTIONAL,
 *     requestedIPv6HomePrefix               [2]   OCTET STRING (SIZE (25))          type OPTIONAL,
 *     -- coded according to RFC 5026
 *     homeAddress                           [3]   OCTET STRING (SIZE (8))           type OPTIONAL,
 *     iPv4careOfAddress                     [4]   OCTET STRING (SIZE (8))           type OPTIONAL,
 *     iPv6careOfAddress                     [5]   OCTET STRING (SIZE(16))           type OPTIONAL,
 *     aPN                                   [6]   OCTET STRING (SIZE (1..100))      type OPTIONAL,
 *     status                                [7]   INTEGER (0..255)                  type OPTIONAL,
 *     hSS-AAA-address                       [8]   OCTET STRING                      type OPTIONAL,
 *     targetPDN-GW-Address                  [9]   OCTET STRING                      type OPTIONAL,
 *     ...
 *     -- parameters coded according to 3GPP TS 24.303 [49] and RFCs specifically
 *     -- referenced in it.
 * }
 * ```
 * 
 * @class
 */
export
class EPS_DSMIP_SpecificParameters {
    /**
     * @summary `lifetime`.
     * @description
     * 
     * Lifetime of the tunnel. Nonzero for registration or a lifetime extension;
     * zero for deregistration (table 10.5.2).
     * 
     * @public
     * @readonly
     */
    readonly lifetime: OPTIONAL<INTEGER>;
    /**
     * @summary `requestedIPv6HomePrefix`.
     * @description
     * 
     * IPv6 home prefix the UE requested (table 10.5.2). Coded according to RFC
     * 5026 (module comment).
     * 
     * @public
     * @readonly
     */
    readonly requestedIPv6HomePrefix: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `homeAddress`.
     * @description
     * 
     * Home IP address of the UE (table 10.5.2).
     * 
     * @public
     * @readonly
     */
    readonly homeAddress: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `iPv4careOfAddress`.
     * @description
     * 
     * Local IPv4 address the access network assigned to the UE (table 10.5.2,
     * care-of address).
     * 
     * @public
     * @readonly
     */
    readonly iPv4careOfAddress: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `iPv6careOfAddress`.
     * @description
     * 
     * Local IPv6 address the access network assigned to the UE (table 10.5.2,
     * care-of address).
     * 
     * @public
     * @readonly
     */
    readonly iPv6careOfAddress: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `aPN`.
     * @description
     * 
     * APN of the PDN connection. From the MME this is the APN the UE provided;
     * from the S-GW or PDN-GW it is the APN in use (table 10.5.2).
     * 
     * @public
     * @readonly
     */
    readonly aPN: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `status`.
     * @description
     * 
     * Failure cause when the protocol reports it this way. Table 10.5.2 uses
     * status for a failed session modification and, depending on the protocol,
     * for a failed attach.
     * 
     * @public
     * @readonly
     */
    readonly status: OPTIONAL<INTEGER>;
    /**
     * @summary `hSS_AAA_address`.
     * @description
     * 
     * Address of the HSS or AAA that triggered a PDN-GW reallocation (table
     * 10.5.2).
     * 
     * @public
     * @readonly
     */
    readonly hSS_AAA_address: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `targetPDN_GW_Address`.
     * @description
     * 
     * Address of the PDN-GW the UE is reallocated to (table 10.5.2).
     * 
     * @public
     * @readonly
     */
    readonly targetPDN_GW_Address: OPTIONAL<OCTET_STRING>;
    /**
     * @summary Extensions that are not recognized.
     * @description
     * 
     * Extension additions that this version of the specification does not
     * define. Annex D requires the LEMF to ignore an unrecognized parameter and
     * continue with the record.
     * 
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        lifetime?: OPTIONAL<INTEGER>,
        requestedIPv6HomePrefix?: OPTIONAL<OCTET_STRING>,
        homeAddress?: OPTIONAL<OCTET_STRING>,
        iPv4careOfAddress?: OPTIONAL<OCTET_STRING>,
        iPv6careOfAddress?: OPTIONAL<OCTET_STRING>,
        aPN?: OPTIONAL<OCTET_STRING>,
        status?: OPTIONAL<INTEGER>,
        hSS_AAA_address?: OPTIONAL<OCTET_STRING>,
        targetPDN_GW_Address?: OPTIONAL<OCTET_STRING>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.lifetime = lifetime;
        this.requestedIPv6HomePrefix = requestedIPv6HomePrefix;
        this.homeAddress = homeAddress;
        this.iPv4careOfAddress = iPv4careOfAddress;
        this.iPv6careOfAddress = iPv6careOfAddress;
        this.aPN = aPN;
        this.status = status;
        this.hSS_AAA_address = hSS_AAA_address;
        this.targetPDN_GW_Address = targetPDN_GW_Address;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a EPS_DSMIP_SpecificParameters
     * @description
     * 
     * This takes an `object` and converts it to a `EPS_DSMIP_SpecificParameters`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `EPS_DSMIP_SpecificParameters`.
     * @returns {EPS_DSMIP_SpecificParameters}
     */
    public static _from_object (_o: { [_K in keyof (EPS_DSMIP_SpecificParameters)]: (EPS_DSMIP_SpecificParameters)[_K] }): EPS_DSMIP_SpecificParameters {
        return new EPS_DSMIP_SpecificParameters(_o.lifetime, _o.requestedIPv6HomePrefix, _o.homeAddress, _o.iPv4careOfAddress, _o.iPv6careOfAddress, _o.aPN, _o.status, _o.hSS_AAA_address, _o.targetPDN_GW_Address, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of EPS_DSMIP_SpecificParameters
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_EPS_DSMIP_SpecificParameters: $.ComponentSpec[] = [
    new $.ComponentSpec("lifetime", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("requestedIPv6HomePrefix", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("homeAddress", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("iPv4careOfAddress", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("iPv6careOfAddress", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("aPN", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("status", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("hSS-AAA-address", true, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("targetPDN-GW-Address", true, $.hasTag(_TagClass.context, 9))
];

/**
 * @summary The Trailing Root Component Types of EPS_DSMIP_SpecificParameters
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_EPS_DSMIP_SpecificParameters: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of EPS_DSMIP_SpecificParameters
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_EPS_DSMIP_SpecificParameters: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_EPS_DSMIP_SpecificParameters: $.ASN1Decoder<EPS_DSMIP_SpecificParameters> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EPS_DSMIP_SpecificParameters
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EPS_DSMIP_SpecificParameters (el: _Element): EPS_DSMIP_SpecificParameters {
    if (!_cached_decoder_for_EPS_DSMIP_SpecificParameters) { _cached_decoder_for_EPS_DSMIP_SpecificParameters = function (el: _Element): EPS_DSMIP_SpecificParameters {
    let lifetime: OPTIONAL<INTEGER>;
    let requestedIPv6HomePrefix: OPTIONAL<OCTET_STRING>;
    let homeAddress: OPTIONAL<OCTET_STRING>;
    let iPv4careOfAddress: OPTIONAL<OCTET_STRING>;
    let iPv6careOfAddress: OPTIONAL<OCTET_STRING>;
    let aPN: OPTIONAL<OCTET_STRING>;
    let status: OPTIONAL<INTEGER>;
    let hSS_AAA_address: OPTIONAL<OCTET_STRING>;
    let targetPDN_GW_Address: OPTIONAL<OCTET_STRING>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "lifetime": (_el: _Element): void => {
            lifetime = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el);
            const _n = typeof lifetime === "bigint" ? lifetime : BigInt(lifetime);
            if (_n < 0n || _n > 65535n) {
                throw new ASN1OverflowError("EPS_DSMIP_SpecificParameters.lifetime violates INTEGER range");
            }
        },
        "requestedIPv6HomePrefix": (_el: _Element): void => {
            requestedIPv6HomePrefix = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el);
            if (requestedIPv6HomePrefix.length < 25 || requestedIPv6HomePrefix.length > 25) {
                throw new ASN1SizeError("EPS_DSMIP_SpecificParameters.requestedIPv6HomePrefix violates SIZE constraint");
            }
        },
        "homeAddress": (_el: _Element): void => {
            homeAddress = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el);
            if (homeAddress.length < 8 || homeAddress.length > 8) {
                throw new ASN1SizeError("EPS_DSMIP_SpecificParameters.homeAddress violates SIZE constraint");
            }
        },
        "iPv4careOfAddress": (_el: _Element): void => {
            iPv4careOfAddress = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el);
            if (iPv4careOfAddress.length < 8 || iPv4careOfAddress.length > 8) {
                throw new ASN1SizeError("EPS_DSMIP_SpecificParameters.iPv4careOfAddress violates SIZE constraint");
            }
        },
        "iPv6careOfAddress": (_el: _Element): void => {
            iPv6careOfAddress = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el);
            if (iPv6careOfAddress.length < 16 || iPv6careOfAddress.length > 16) {
                throw new ASN1SizeError("EPS_DSMIP_SpecificParameters.iPv6careOfAddress violates SIZE constraint");
            }
        },
        "aPN": (_el: _Element): void => {
            aPN = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el);
            if (aPN.length < 1 || aPN.length > 100) {
                throw new ASN1SizeError("EPS_DSMIP_SpecificParameters.aPN violates SIZE constraint");
            }
        },
        "status": (_el: _Element): void => {
            status = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el);
            const _n = typeof status === "bigint" ? status : BigInt(status);
            if (_n < 0n || _n > 255n) {
                throw new ASN1OverflowError("EPS_DSMIP_SpecificParameters.status violates INTEGER range");
            }
        },
        "hSS-AAA-address": (_el: _Element): void => { hSS_AAA_address = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "targetPDN-GW-Address": (_el: _Element): void => { targetPDN_GW_Address = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_EPS_DSMIP_SpecificParameters,
        _extension_additions_list_spec_for_EPS_DSMIP_SpecificParameters,
        _root_component_type_list_2_spec_for_EPS_DSMIP_SpecificParameters,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new EPS_DSMIP_SpecificParameters(
        lifetime,
        requestedIPv6HomePrefix,
        homeAddress,
        iPv4careOfAddress,
        iPv6careOfAddress,
        aPN,
        status,
        hSS_AAA_address,
        targetPDN_GW_Address,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_EPS_DSMIP_SpecificParameters(el);
}

let _cached_encoder_for_EPS_DSMIP_SpecificParameters: $.ASN1Encoder<EPS_DSMIP_SpecificParameters> | null = null;

/**
 * @summary Encodes a(n) EPS_DSMIP_SpecificParameters into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EPS_DSMIP_SpecificParameters, encoded as an ASN.1 Element.
 */
export
function _encode_EPS_DSMIP_SpecificParameters (value: EPS_DSMIP_SpecificParameters, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EPS_DSMIP_SpecificParameters) { _cached_encoder_for_EPS_DSMIP_SpecificParameters = function (value: EPS_DSMIP_SpecificParameters, elGetter: $.ASN1Encoder<EPS_DSMIP_SpecificParameters>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(9 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    if (value.lifetime !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => $._encodeInteger, $.BER)(value.lifetime, $.BER);
    }
    if (value.requestedIPv6HomePrefix !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => $._encodeOctetString, $.BER)(value.requestedIPv6HomePrefix, $.BER);
    }
    if (value.homeAddress !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => $._encodeOctetString, $.BER)(value.homeAddress, $.BER);
    }
    if (value.iPv4careOfAddress !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 4, () => $._encodeOctetString, $.BER)(value.iPv4careOfAddress, $.BER);
    }
    if (value.iPv6careOfAddress !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 5, () => $._encodeOctetString, $.BER)(value.iPv6careOfAddress, $.BER);
    }
    if (value.aPN !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 6, () => $._encodeOctetString, $.BER)(value.aPN, $.BER);
    }
    if (value.status !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 7, () => $._encodeInteger, $.BER)(value.status, $.BER);
    }
    if (value.hSS_AAA_address !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 8, () => $._encodeOctetString, $.BER)(value.hSS_AAA_address, $.BER);
    }
    if (value.targetPDN_GW_Address !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 9, () => $._encodeOctetString, $.BER)(value.targetPDN_GW_Address, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_EPS_DSMIP_SpecificParameters(value, elGetter);
}


/* eslint-enable */
