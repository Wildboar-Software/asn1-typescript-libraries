/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary DSS1_SS_Invoke_Components
 * @description
 *
 * Each octet string is one DSS1 Invoke or Return Result component, coded as in
 * the relevant DSS1 supplementary-service recommendation. Clause A.5.3: report
 * a successful invocation only. One IRI record, containing the invoke
 * component and possibly parameters from the return result, is sufficient.
 * Table A.3.2 note 2: these elements are embedded in a DSS1 facility
 * information element. Note 3: the facility information element is included
 * only when it contains a parameter from that table.
 *
 * BeginCONF, AddCONF, SplitCONF, DropCONF, IsolateCONF, ReattachCONF, and
 * PartyDISC: EN 300 185-1. MCIDRequest: EN 300 130-1. Begin3PTY and End3PTY:
 * EN 300 188-1. ECTExecute, ECTInform, ECTLinkIdRequest, ECTLoopTest,
 * ExplicitECTExecute, RequestSubaddress, and SubaddressTransfer: EN 300 369-1.
 * Call forwarding ActivationDiversion, DeactivationDiversion,
 * ActivationStatusNotification, DeactivationStatusNotification,
 * InterrogationDiversion, InterrogationServedUserNumber, DiversionInformation,
 * CallDeflection, CallRerouteing, DivertingLegInformation1,
 * DivertingLegInformation2, and DivertingLegInformation3: EN 300 207-1. Other
 * invoke or return result components may be included.
 *
 * The value uses an imported format, so clause D.1 keeps that standard's
 * half-octet order: the general rule (most significant half-octet in bits 5 to
 * 8, least significant in bits 1 to 4) does not apply.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), clause A.5.3, table A.3.2, clause D.1,
 * annex D, clause D.5.
 *
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DSS1-SS-Invoke-Components  ::=  SET SIZE (1..256) OF OCTET STRING (SIZE (1..256))
 * ```
 */
export
type DSS1_SS_Invoke_Components = OCTET_STRING[]; // SetOfType

let _cached_decoder_for_DSS1_SS_Invoke_Components: $.ASN1Decoder<DSS1_SS_Invoke_Components> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DSS1_SS_Invoke_Components
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DSS1_SS_Invoke_Components (el: _Element): DSS1_SS_Invoke_Components {
    if (!_cached_decoder_for_DSS1_SS_Invoke_Components) { _cached_decoder_for_DSS1_SS_Invoke_Components = $._decodeSetOf<OCTET_STRING>(() => $._decodeOctetString); }
    const _value = _cached_decoder_for_DSS1_SS_Invoke_Components(el);
    if (_value.length < 1 || _value.length > 256) {
        throw new ASN1SizeError("DSS1_SS_Invoke_Components violates SIZE constraint");
    }
    for (const _item of _value) {
        if (_item.length < 1 || _item.length > 256) {
            throw new ASN1SizeError("DSS1_SS_Invoke_Components element violates SIZE constraint");
        }
    }
    return _value;
}

let _cached_encoder_for_DSS1_SS_Invoke_Components: $.ASN1Encoder<DSS1_SS_Invoke_Components> | null = null;

/**
 * @summary Encodes a(n) DSS1_SS_Invoke_Components into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DSS1_SS_Invoke_Components, encoded as an ASN.1 Element.
 */
export
function _encode_DSS1_SS_Invoke_Components (value: DSS1_SS_Invoke_Components, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DSS1_SS_Invoke_Components) { _cached_encoder_for_DSS1_SS_Invoke_Components = $._encodeSetOf<OCTET_STRING>(() => $._encodeOctetString, $.BER); }
    return _cached_encoder_for_DSS1_SS_Invoke_Components(value, elGetter);
}


/* eslint-enable */
