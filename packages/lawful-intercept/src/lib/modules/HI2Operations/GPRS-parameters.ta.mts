/* eslint-disable */
import {
    OCTET_STRING,
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { DataNodeAddress, _decode_DataNodeAddress, _encode_DataNodeAddress } from "../HI2Operations/DataNodeAddress.ta.mjs";
// export { DataNodeAddress, _decode_DataNodeAddress, _encode_DataNodeAddress } from "../HI2Operations/DataNodeAddress.ta.mjs";


/**
 * @summary GPRS_parameters
 * @description
 *
 * PDP context information on a GPRS IRI record (table B.5.2). While a PDP
 * context is active, IRI-CONTINUE carries CC-relevant IRI and IRI-REPORT
 * carries other IRI (clause B.5.3).
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), table B.5.2, clause B.5.3, annex D,
 * clause D.5.
 *
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GPRS-parameters ::= SEQUENCE
 * {
 *     pDP-address-allocated-to-the-target        [1] DataNodeAddress OPTIONAL,
 *     aPN                                        [2] OCTET STRING (SIZE(1..100)) OPTIONAL,
 *         -- The Access Point Name (APN) is coded in accordance with
 *         -- 3GPP TS 24.008 [41] without the APN IEI (only the last 100 octets are used).
 *         -- Octets are coded according to 3GPP TS 23.003 [76].
 *         -- This parameter is duplicated from 3GPP TS 33.108 [61].
 *     pDP-type                                [3] OCTET STRING (SIZE(2)) OPTIONAL,
 *         -- when PDP-type is IPv4 or IPv6, the IP address is carried by parameter
 *         -- pDP-address-allocated-to-the-target when PDP-type is IPv4v6,
 *         -- the additional IP address is carried by parameter additionalIPaddress
 *     ...,
 *     nSAPI                                    [4] OCTET STRING (SIZE (1)) OPTIONAL,
 *     additionalIPaddress                        [5] DataNodeAddress OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class GPRS_parameters {
    /**
     * @summary `pDP_address_allocated_to_the_target`.
     * @description
     *
     * PDP address used by the target. Table B.5.2: for IPv4v6, two addresses
     * may be carried. When the PDP type is IPv4 or IPv6, the address is
     * carried here. When the PDP type is IPv4v6, the additional address is
     * carried separately.
     *
     * ETSI TS 101 671 V3.15.1 (2018-06), table B.5.2, annex D, clause D.5.
     *
     * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
     *
     * @public
     * @readonly
     */
    readonly pDP_address_allocated_to_the_target: OPTIONAL<DataNodeAddress>;
    /**
     * @summary `aPN`.
     * @description
     *
     * Access point name. Coded per 3GPP TS 24.008 without the APN
     * information-element identifier; only the last 100 octets are used.
     * Octets are coded per 3GPP TS 23.003. Duplicated from 3GPP TS 33.108.
     * Table B.5.2: the name is a logical name (3GPP TS 23.060). The value uses
     * an imported format, so clause D.1 keeps that standard's half-octet
     * order: the general rule (most significant half-octet in bits 5 to 8,
     * least significant in bits 1 to 4) does not apply.
     *
     * ETSI TS 101 671 V3.15.1 (2018-06), table B.5.2, clause D.1, annex D,
     * clause D.5.
     *
     * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
     *
     * @public
     * @readonly
     */
    readonly aPN: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `pDP_type`.
     * @description
     *
     * Two octets. Table B.5.2: the PDP type as defined in 3GPP TS 09.60, 3GPP
     * TS 29.060, 3GPP TS 04.08, 3GPP TS 24.008, 3GPP TS 09.02, and 3GPP TS
     * 29.002. This document does not list those type values. When the type is
     * IPv4 or IPv6, the address is the PDP address allocated to the target.
     * When the type is IPv4v6, the additional address is carried separately.
     * The value uses an imported format, so clause D.1 keeps that standard's
     * half-octet order: the general rule (most significant half-octet in bits
     * 5 to 8, least significant in bits 1 to 4) does not apply.
     *
     * ETSI TS 101 671 V3.15.1 (2018-06), table B.5.2, clause D.1, annex D,
     * clause D.5.
     *
     * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
     *
     * @public
     * @readonly
     */
    readonly pDP_type: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `nSAPI`.
     * @description
     *
     * One octet. Table B.5.2: the network-layer service access point
     * identifier information element contains an NSAPI identifying a PDP
     * context in a mobility management context specified by the Tunnel
     * Endpoint Identifier Control Plane. This document does not state the
     * octet coding.
     *
     * ETSI TS 101 671 V3.15.1 (2018-06), table B.5.2, annex D, clause D.5.
     *
     * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
     *
     * @public
     * @readonly
     */
    readonly nSAPI: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `additionalIPaddress`.
     * @description
     *
     * Additional PDP address when the PDP type is IPv4v6. Table B.5.2 allows
     * two addresses in that case.
     *
     * ETSI TS 101 671 V3.15.1 (2018-06), table B.5.2, annex D, clause D.5.
     *
     * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
     *
     * @public
     * @readonly
     */
    readonly additionalIPaddress: OPTIONAL<DataNodeAddress>;
    /**
     * @summary Extensions that are not recognized.
     * @description
     *
     * Extension additions carried with this value. This module version assigns
     * them no name and no meaning.
     *
     * ETSI TS 101 671 V3.15.1 (2018-06), annex D, clause D.5.
     *
     * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
     *
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        pDP_address_allocated_to_the_target: OPTIONAL<DataNodeAddress>,
        aPN: OPTIONAL<OCTET_STRING>,
        pDP_type: OPTIONAL<OCTET_STRING>,
        nSAPI: OPTIONAL<OCTET_STRING>,
        additionalIPaddress: OPTIONAL<DataNodeAddress>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.pDP_address_allocated_to_the_target = pDP_address_allocated_to_the_target;
        this.aPN = aPN;
        this.pDP_type = pDP_type;
        this.nSAPI = nSAPI;
        this.additionalIPaddress = additionalIPaddress;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a GPRS_parameters
     * @description
     * 
     * This takes an `object` and converts it to a `GPRS_parameters`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `GPRS_parameters`.
     * @returns {GPRS_parameters}
     */
    public static _from_object (_o: { [_K in keyof (GPRS_parameters)]: (GPRS_parameters)[_K] }): GPRS_parameters {
        return new GPRS_parameters(_o.pDP_address_allocated_to_the_target, _o.aPN, _o.pDP_type, _o.nSAPI, _o.additionalIPaddress, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of GPRS_parameters
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_GPRS_parameters: $.ComponentSpec[] = [
    new $.ComponentSpec("pDP-address-allocated-to-the-target", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("aPN", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("pDP-type", true, $.hasTag(_TagClass.context, 3))
];

/**
 * @summary The Trailing Root Component Types of GPRS_parameters
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_GPRS_parameters: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of GPRS_parameters
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_GPRS_parameters: $.ComponentSpec[] = [
    new $.ComponentSpec("nSAPI", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("additionalIPaddress", true, $.hasTag(_TagClass.context, 5))
];

let _cached_decoder_for_GPRS_parameters: $.ASN1Decoder<GPRS_parameters> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) GPRS_parameters
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_GPRS_parameters (el: _Element): GPRS_parameters {
    if (!_cached_decoder_for_GPRS_parameters) { _cached_decoder_for_GPRS_parameters = function (el: _Element): GPRS_parameters {
    let pDP_address_allocated_to_the_target: OPTIONAL<DataNodeAddress>;
    let aPN: OPTIONAL<OCTET_STRING>;
    let pDP_type: OPTIONAL<OCTET_STRING>;
    let nSAPI: OPTIONAL<OCTET_STRING>;
    let additionalIPaddress: OPTIONAL<DataNodeAddress>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "pDP-address-allocated-to-the-target": (_el: _Element): void => { pDP_address_allocated_to_the_target = $._decode_explicit<DataNodeAddress>(() => _decode_DataNodeAddress)(_el); },
        "aPN": (_el: _Element): void => {
            aPN = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el);
            if (aPN.length < 1 || aPN.length > 100) {
                throw new ASN1SizeError("GPRS_parameters.aPN violates SIZE constraint");
            }
        },
        "pDP-type": (_el: _Element): void => {
            pDP_type = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el);
            if (pDP_type.length < 2 || pDP_type.length > 2) {
                throw new ASN1SizeError("GPRS_parameters.pDP_type violates SIZE constraint");
            }
        },
        "nSAPI": (_el: _Element): void => {
            nSAPI = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el);
            if (nSAPI.length < 1 || nSAPI.length > 1) {
                throw new ASN1SizeError("GPRS_parameters.nSAPI violates SIZE constraint");
            }
        },
        "additionalIPaddress": (_el: _Element): void => { additionalIPaddress = $._decode_explicit<DataNodeAddress>(() => _decode_DataNodeAddress)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_GPRS_parameters,
        _extension_additions_list_spec_for_GPRS_parameters,
        _root_component_type_list_2_spec_for_GPRS_parameters,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new GPRS_parameters(
        pDP_address_allocated_to_the_target,
        aPN,
        pDP_type,
        nSAPI,
        additionalIPaddress,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_GPRS_parameters(el);
}

let _cached_encoder_for_GPRS_parameters: $.ASN1Encoder<GPRS_parameters> | null = null;

/**
 * @summary Encodes a(n) GPRS_parameters into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GPRS_parameters, encoded as an ASN.1 Element.
 */
export
function _encode_GPRS_parameters (value: GPRS_parameters, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_GPRS_parameters) { _cached_encoder_for_GPRS_parameters = function (value: GPRS_parameters, elGetter: $.ASN1Encoder<GPRS_parameters>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(5 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    if (value.pDP_address_allocated_to_the_target !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 1, () => _encode_DataNodeAddress, $.BER)(value.pDP_address_allocated_to_the_target, $.BER);
    }
    if (value.aPN !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => $._encodeOctetString, $.BER)(value.aPN, $.BER);
    }
    if (value.pDP_type !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => $._encodeOctetString, $.BER)(value.pDP_type, $.BER);
    }
    if (value.nSAPI !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 4, () => $._encodeOctetString, $.BER)(value.nSAPI, $.BER);
    }
    if (value.additionalIPaddress !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 5, () => _encode_DataNodeAddress, $.BER)(value.additionalIPaddress, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_GPRS_parameters(value, elGetter);
}


/* eslint-enable */
