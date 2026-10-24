/* eslint-disable */
import {
    type OBJECT_IDENTIFIER,
    type OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Error
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { hi3GPRSLIIdOperationId } from "../Gprs-HI3-PS/hi3GPRSLIIdOperationId.va.mjs";
import { CC_PDU, _decode_CC_PDU, _encode_CC_PDU } from "../Umts-HI3-PS/CC-PDU.ta.mjs";
// export { CC_PDU, _decode_CC_PDU, _encode_CC_PDU } from "../Umts-HI3-PS/CC-PDU.ta.mjs";


/**
 * @summary ETSI_CC_PDU
 * @description
 *
 * GPRS HI3 content defined in clause D.9. `eTSI-CC-PDU` carries `CC-PDU`
 * imported from 3GPP TS 33.108, module Umts-HI3-PS. This document does not
 * define that imported type.
 *
 * Clause B.5.1: one administration function, with the delivery functions, hides
 * multiple LEA activations on the same target from the xGSN. The figure is a
 * logical reference configuration and does not mandate separate physical
 * entities. GGSN interception is a national option. A communication may be
 * intercepted on several identities (MSISDN, IMSI, IMEI) of the same target.
 * The xGSN gives DF2P and DF3P a correlation number and a target identity, used
 * to select the LEAs. Clause B.5.2.2: that correlation number is unique per PDP
 * context and correlates CC with IRI, and the IRIs of one PDP context. Clause
 * B.5.2.1 maps the LIID to the GSM warrant reference number.
 *
 * Clause B.5.4 points the GPRS HI3 port at annex F. Annex F describes a GLIC
 * header carried over UDP or TCP, and a separate FTP CC header. This document
 * does not identify `ETSI-CC-PDU` with either header.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), clause D.9, clause B.5.1, clause B.5.2,
 * clause B.5.4.
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ETSI-CC-PDU ::= SEQUENCE
 * {
 *     domainID            [0] OBJECT IDENTIFIER (hi3GPRSLIIdOperationId) OPTIONAL,
 *         -- Once using FTP delivery mechanism
 *     eTSI-CC-PDU            [1] CC-PDU,
 *     ...
 * }
 * ```
 * 
 * @class
 */
export
class ETSI_CC_PDU {
    /**
     * @summary `domainID`.
     * @description
     *
     * Used when the FTP delivery mechanism is used. Constrained to
     * `hi3GPRSLIIdOperationId`. Optional. This module's comment does not
     * require the sending entity to include the OID; that rule is the HI2
     * `domainID` comment, and it is not stated here.
     *
     * ETSI TS 101 671 V3.15.1 (2018-06), clause D.9.
     * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
     *
     * @public
     * @readonly
     */
    readonly domainID: OPTIONAL<OBJECT_IDENTIFIER>;
    /**
     * @summary `eTSI_CC_PDU`.
     * @description
     *
     * `CC-PDU` imported from 3GPP TS 33.108 (Umts-HI3-PS). Clause D.9 does not
     * define its contents. Annex F header fields are not components of this
     * value.
     *
     * ETSI TS 101 671 V3.15.1 (2018-06), clause D.9, clause B.5.4.
     * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
     *
     * @public
     * @readonly
     */
    readonly eTSI_CC_PDU: CC_PDU;
    /**
     * @summary Extensions that are not recognized.
     * @description
     *
     * An unrecognized parameter is ignored and processing of the record
     * continues. No special error or alarm is required, because the cause may
     * be a newer version of the specification. Content that is not recognized
     * is also ignored; the LEMF may raise an alarm. A record that cannot be
     * decoded is rejected when ROSE is used, or ignored.
     *
     * ETSI TS 101 671 V3.15.1 (2018-06), annex G, clause C.1.2.4, clause D.9.
     * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
     *
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        domainID: OPTIONAL<OBJECT_IDENTIFIER>,
        eTSI_CC_PDU: CC_PDU,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.domainID = domainID;
        this.eTSI_CC_PDU = eTSI_CC_PDU;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a ETSI_CC_PDU
     * @description
     * 
     * This takes an `object` and converts it to a `ETSI_CC_PDU`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ETSI_CC_PDU`.
     * @returns {ETSI_CC_PDU}
     */
    public static _from_object (_o: { [_K in keyof (ETSI_CC_PDU)]: (ETSI_CC_PDU)[_K] }): ETSI_CC_PDU {
        return new ETSI_CC_PDU(_o.domainID, _o.eTSI_CC_PDU, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of ETSI_CC_PDU
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ETSI_CC_PDU: $.ComponentSpec[] = [
    new $.ComponentSpec("domainID", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("eTSI-CC-PDU", false, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of ETSI_CC_PDU
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ETSI_CC_PDU: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ETSI_CC_PDU
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ETSI_CC_PDU: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ETSI_CC_PDU: $.ASN1Decoder<ETSI_CC_PDU> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ETSI_CC_PDU
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ETSI_CC_PDU (el: _Element): ETSI_CC_PDU {
    if (!_cached_decoder_for_ETSI_CC_PDU) { _cached_decoder_for_ETSI_CC_PDU = function (el: _Element): ETSI_CC_PDU {
    let domainID: OPTIONAL<OBJECT_IDENTIFIER>;
    let eTSI_CC_PDU!: CC_PDU;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "domainID": (_el: _Element): void => {
            domainID = $._decode_implicit<OBJECT_IDENTIFIER>(() => $._decodeObjectIdentifier)(_el);
            if (!domainID.isEqualTo(hi3GPRSLIIdOperationId)) {
                throw new ASN1Error("ETSI_CC_PDU.domainID violates OBJECT IDENTIFIER constraint");
            }
        },
        "eTSI-CC-PDU": (_el: _Element): void => { eTSI_CC_PDU = $._decode_implicit<CC_PDU>(() => _decode_CC_PDU)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ETSI_CC_PDU,
        _extension_additions_list_spec_for_ETSI_CC_PDU,
        _root_component_type_list_2_spec_for_ETSI_CC_PDU,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new ETSI_CC_PDU(
        domainID,
        eTSI_CC_PDU,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_ETSI_CC_PDU(el);
}

let _cached_encoder_for_ETSI_CC_PDU: $.ASN1Encoder<ETSI_CC_PDU> | null = null;

/**
 * @summary Encodes a(n) ETSI_CC_PDU into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ETSI_CC_PDU, encoded as an ASN.1 Element.
 */
export
function _encode_ETSI_CC_PDU (value: ETSI_CC_PDU, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ETSI_CC_PDU) { _cached_encoder_for_ETSI_CC_PDU = function (value: ETSI_CC_PDU, elGetter: $.ASN1Encoder<ETSI_CC_PDU>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(2 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    if (value.domainID !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 0, () => $._encodeObjectIdentifier, $.BER)(value.domainID, $.BER);
    }
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_CC_PDU, $.BER)(value.eTSI_CC_PDU, $.BER);
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_ETSI_CC_PDU(value, elGetter);
}


/* eslint-enable */
