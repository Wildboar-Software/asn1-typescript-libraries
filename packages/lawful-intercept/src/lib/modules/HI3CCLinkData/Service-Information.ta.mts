/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    type OCTET_STRING,
    type OPTIONAL,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary Service_Information
 * @description
 *
 * Service octets that may accompany the UUS1 CC-link information. Each
 * component is optional. The comments name the source protocol and do not say
 * when a component is present. Annex E maps the same kinds of octet into the
 * calling-party subaddress when UUS1 is not used, and fills a missing
 * subaddress service octet with FF hex. That fill is stated for the subaddress,
 * not for these components.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), clause D.8, clause E.3.2, clause E.4.1.
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Service-Information ::= SET
 * {
 *     high-layer-capability    [0] OCTET STRING (SIZE(1)) OPTIONAL,
 *         -- HLC (octet 4 only)
 *         -- Protocol: EN 300 403-1 [6]
 *     tMR                     [1] OCTET STRING (SIZE(1)) OPTIONAL,
 *         -- Transmission Medium Requirement
 *         -- Protocol: ISUP EN 300 356 [5]
 *     bearerServiceCode         [2] OCTET STRING (SIZE(1)) OPTIONAL,
 *     teleServiceCode            [3] OCTET STRING (SIZE(1)) OPTIONAL
 *         -- from MAP, TS GSM 09.02 [32], clause 14.7.9 and clause 14.7.10
 * }
 * ```
 * 
 * @class
 */
export
class Service_Information {
    /**
     * @summary `high_layer_capability`.
     * @description
     *
     * High-layer compatibility, octet 4 only. Protocol: EN 300 403-1. This
     * document does not restate that protocol. One octet.
     *
     * ETSI TS 101 671 V3.15.1 (2018-06), clause D.8.
     * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
     *
     * @public
     * @readonly
     */
    readonly high_layer_capability: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `tMR`.
     * @description
     *
     * Transmission medium requirement. Protocol: ISUP, EN 300 356. This
     * document does not restate that protocol. One octet.
     *
     * ETSI TS 101 671 V3.15.1 (2018-06), clause D.8.
     * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
     *
     * @public
     * @readonly
     */
    readonly tMR: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `bearerServiceCode`.
     * @description
     *
     * No comment of its own. The comment after `teleServiceCode` cites MAP, TS
     * GSM 09.02, clauses 14.7.9 and 14.7.10, and does not say which clause
     * applies to which component. Annex E codes a mobile bearer service code
     * from 3GPP TS 09.02 in the calling-party subaddress. This document does
     * not define the octet.
     *
     * ETSI TS 101 671 V3.15.1 (2018-06), clause D.8, clause E.3.2.
     * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
     *
     * @public
     * @readonly
     */
    readonly bearerServiceCode: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `teleServiceCode`.
     * @description
     *
     * The comment cites MAP, TS GSM 09.02, clauses 14.7.9 and 14.7.10. This
     * document does not restate those clauses and does not say which clause is
     * the teleservice code. Annex E codes a mobile teleservice code from 3GPP
     * TS 09.02 in the calling-party subaddress.
     *
     * ETSI TS 101 671 V3.15.1 (2018-06), clause D.8, clause E.3.2.
     * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
     *
     * @public
     * @readonly
     */
    readonly teleServiceCode: OPTIONAL<OCTET_STRING>;

    constructor (
        high_layer_capability?: OPTIONAL<OCTET_STRING>,
        tMR?: OPTIONAL<OCTET_STRING>,
        bearerServiceCode?: OPTIONAL<OCTET_STRING>,
        teleServiceCode?: OPTIONAL<OCTET_STRING>
    ) {
        this.high_layer_capability = high_layer_capability;
        this.tMR = tMR;
        this.bearerServiceCode = bearerServiceCode;
        this.teleServiceCode = teleServiceCode;
    }

    /**
     * @summary Restructures an object into a Service_Information
     * @description
     * 
     * This takes an `object` and converts it to a `Service_Information`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Service_Information`.
     * @returns {Service_Information}
     */
    public static _from_object (_o: { [_K in keyof (Service_Information)]: (Service_Information)[_K] }): Service_Information {
        return new Service_Information(_o.high_layer_capability, _o.tMR, _o.bearerServiceCode, _o.teleServiceCode);
    }


}

/**
 * @summary The Leading Root Component Types of Service_Information
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_Service_Information: $.ComponentSpec[] = [
    new $.ComponentSpec("high-layer-capability", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("tMR", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("bearerServiceCode", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("teleServiceCode", true, $.hasTag(_TagClass.context, 3))
];

/**
 * @summary The Trailing Root Component Types of Service_Information
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_Service_Information: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of Service_Information
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_Service_Information: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_Service_Information: $.ASN1Decoder<Service_Information> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Service_Information
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Service_Information (el: _Element): Service_Information {
    if (!_cached_decoder_for_Service_Information) { _cached_decoder_for_Service_Information = function (el: _Element): Service_Information {
    /* START_OF_SET_COMPONENT_DECLARATIONS */
    let high_layer_capability: OPTIONAL<OCTET_STRING>;
    let tMR: OPTIONAL<OCTET_STRING>;
    let bearerServiceCode: OPTIONAL<OCTET_STRING>;
    let teleServiceCode: OPTIONAL<OCTET_STRING>;
    /* END_OF_SET_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: $.DecodingMap = {
        "high-layer-capability": (_el: _Element): void => {
            high_layer_capability = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el);
            if (high_layer_capability.length < 1 || high_layer_capability.length > 1) {
                throw new ASN1SizeError("Service_Information.high_layer_capability violates SIZE constraint");
            }
        },
        "tMR": (_el: _Element): void => {
            tMR = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el);
            if (tMR.length < 1 || tMR.length > 1) {
                throw new ASN1SizeError("Service_Information.tMR violates SIZE constraint");
            }
        },
        "bearerServiceCode": (_el: _Element): void => {
            bearerServiceCode = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el);
            if (bearerServiceCode.length < 1 || bearerServiceCode.length > 1) {
                throw new ASN1SizeError("Service_Information.bearerServiceCode violates SIZE constraint");
            }
        },
        "teleServiceCode": (_el: _Element): void => {
            teleServiceCode = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el);
            if (teleServiceCode.length < 1 || teleServiceCode.length > 1) {
                throw new ASN1SizeError("Service_Information.teleServiceCode violates SIZE constraint");
            }
        }
    };
    /* END_OF_CALLBACKS_MAP */
    $._parse_set(el, callbacks,
        _root_component_type_list_1_spec_for_Service_Information,
        _extension_additions_list_spec_for_Service_Information,
        _root_component_type_list_2_spec_for_Service_Information,
        undefined,
    );
    return new Service_Information( /* SET_CONSTRUCTOR_CALL */
        high_layer_capability,
        tMR,
        bearerServiceCode,
        teleServiceCode
    );
}; }
    return _cached_decoder_for_Service_Information(el);
}

let _cached_encoder_for_Service_Information: $.ASN1Encoder<Service_Information> | null = null;

/**
 * @summary Encodes a(n) Service_Information into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Service_Information, encoded as an ASN.1 Element.
 */
export
function _encode_Service_Information (value: Service_Information, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Service_Information) { _cached_encoder_for_Service_Information = function (value: Service_Information, elGetter: $.ASN1Encoder<Service_Information>): _Element {
    const _components: _Element[] = new Array(4);
    let _components_i = 0;
    if (value.high_layer_capability !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 0, () => $._encodeOctetString, $.BER)(value.high_layer_capability, $.BER);
    }
    if (value.tMR !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => $._encodeOctetString, $.BER)(value.tMR, $.BER);
    }
    if (value.bearerServiceCode !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => $._encodeOctetString, $.BER)(value.bearerServiceCode, $.BER);
    }
    if (value.teleServiceCode !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => $._encodeOctetString, $.BER)(value.teleServiceCode, $.BER);
    }
    _components.length = _components_i;
    return $._encodeSet(_components, $.BER);
}; }
    return _cached_encoder_for_Service_Information(value, elGetter);
}


/* eslint-enable */
