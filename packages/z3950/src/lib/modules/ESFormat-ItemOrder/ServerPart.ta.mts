/* eslint-disable */
import {
    EXTERNAL,
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { ServerPart_auxiliaryStatus, _decode_ServerPart_auxiliaryStatus, _encode_ServerPart_auxiliaryStatus } from "../ESFormat-ItemOrder/ServerPart-auxiliaryStatus.ta.mjs";


/**
 * @summary ServerPart
 * @description
 * 
 * What the server records for an item order: the item request it stored, a
 * status or error report defined outside this standard, and an optional
 * auxiliary status.
 * 
 * ANSI/NISO Z39.50-2003 EXT.1.4.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ServerPart ::= SEQUENCE {
 *     itemRequest         [1] IMPLICIT EXTERNAL OPTIONAL,
 *     -- When itemRequest is an ILL-Request APDU,
 *     -- use OID 1.0.10161.2.1 (as above)
 *     statusOrErrorReport [2] IMPLICIT EXTERNAL OPTIONAL,
 *     -- When statusOrErrorReport is an ILL Status-Or-Error-Report
 *     -- APDU, use OID 1.0.10161.2.1 (as above)
 *     auxiliaryStatus     [3] IMPLICIT INTEGER{
 *         notReceived              (1),
 *         loanQueue                (2),
 *         forwarded                (3),
 *         unfilledCopyright        (4),
 *         filledCopyright          (5)
 *     } OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class ServerPart {
    /**
     * @summary `itemRequest`.
     * @description
     * 
     * If the client sent an external item request (for example an interlibrary
     * loan request), the server copies it here, and may modify it first. If
     * the client sent only a result-set item, the server may construct a
     * corresponding item request; if it does not, the requested item is not
     * identified in the task package. When this value is an ILL-Request APDU,
     * use OID 1.0.10161.2.1. Contents of an ILL APDU are defined by ISO 10161,
     * not by Z39.50.
     * 
     * ANSI/NISO Z39.50-2003 EXT.1.4.
     * 
     * @public
     * @readonly
     */
    readonly itemRequest: OPTIONAL<EXTERNAL>;
    /**
     * @summary `statusOrErrorReport`.
     * @description
     * 
     * Status or error report supplied by the server. Its definition is
     * external to this standard and may be based on the StatusOrErrorReport
     * APDU of the ILL protocol. When it is that ILL APDU, use OID
     * 1.0.10161.2.1.
     * 
     * ANSI/NISO Z39.50-2003 EXT.1.4.
     * 
     * @public
     * @readonly
     */
    readonly statusOrErrorReport: OPTIONAL<EXTERNAL>;
    /**
     * @summary `auxiliaryStatus`.
     * @description
     * 
     * Optional supplement to whatever status the status or error report
     * carries. The standard names the values and does not define them further.
     * 
     * ANSI/NISO Z39.50-2003 EXT.1.4.
     * 
     * @public
     * @readonly
     */
    readonly auxiliaryStatus: OPTIONAL<ServerPart_auxiliaryStatus>;

    constructor (
        itemRequest: OPTIONAL<EXTERNAL>,
        statusOrErrorReport: OPTIONAL<EXTERNAL>,
        auxiliaryStatus: OPTIONAL<ServerPart_auxiliaryStatus>
    ) {
        this.itemRequest = itemRequest;
        this.statusOrErrorReport = statusOrErrorReport;
        this.auxiliaryStatus = auxiliaryStatus;
    }

    /**
     * @summary Restructures an object into a ServerPart
     * @description
     * 
     * This takes an `object` and converts it to a `ServerPart`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ServerPart`.
     * @returns {ServerPart}
     */
    public static _from_object (_o: { [_K in keyof (ServerPart)]: (ServerPart)[_K] }): ServerPart {
        return new ServerPart(_o.itemRequest, _o.statusOrErrorReport, _o.auxiliaryStatus);
    }


}

/**
 * @summary The Leading Root Component Types of ServerPart
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ServerPart: $.ComponentSpec[] = [
    new $.ComponentSpec("itemRequest", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("statusOrErrorReport", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("auxiliaryStatus", true, $.hasTag(_TagClass.context, 3))
];

/**
 * @summary The Trailing Root Component Types of ServerPart
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ServerPart: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ServerPart
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ServerPart: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ServerPart: $.ASN1Decoder<ServerPart> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ServerPart
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ServerPart (el: _Element): ServerPart {
    if (!_cached_decoder_for_ServerPart) { _cached_decoder_for_ServerPart = function (el: _Element): ServerPart {
    let itemRequest: OPTIONAL<EXTERNAL>;
    let statusOrErrorReport: OPTIONAL<EXTERNAL>;
    let auxiliaryStatus: OPTIONAL<ServerPart_auxiliaryStatus>;
    const callbacks: $.DecodingMap = {
        "itemRequest": (_el: _Element): void => { itemRequest = $._decode_implicit<EXTERNAL>(() => $._decodeExternal)(_el); },
        "statusOrErrorReport": (_el: _Element): void => { statusOrErrorReport = $._decode_implicit<EXTERNAL>(() => $._decodeExternal)(_el); },
        "auxiliaryStatus": (_el: _Element): void => { auxiliaryStatus = $._decode_implicit<ServerPart_auxiliaryStatus>(() => _decode_ServerPart_auxiliaryStatus)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ServerPart,
        _extension_additions_list_spec_for_ServerPart,
        _root_component_type_list_2_spec_for_ServerPart,
        undefined,
    );
    return new ServerPart(
        itemRequest,
        statusOrErrorReport,
        auxiliaryStatus
    );
}; }
    return _cached_decoder_for_ServerPart(el);
}

let _cached_encoder_for_ServerPart: $.ASN1Encoder<ServerPart> | null = null;

/**
 * @summary Encodes a(n) ServerPart into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ServerPart, encoded as an ASN.1 Element.
 */
export
function _encode_ServerPart (value: ServerPart, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ServerPart) { _cached_encoder_for_ServerPart = function (value: ServerPart, elGetter: $.ASN1Encoder<ServerPart>): _Element {
    const _components: _Element[] = new Array(3);
    let _components_i = 0;
    if (value.itemRequest !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => $._encodeExternal, $.BER)(value.itemRequest, $.BER);
    }
    if (value.statusOrErrorReport !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => $._encodeExternal, $.BER)(value.statusOrErrorReport, $.BER);
    }
    if (value.auxiliaryStatus !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => _encode_ServerPart_auxiliaryStatus, $.BER)(value.auxiliaryStatus, $.BER);
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_ServerPart(value, elGetter);
}


/* eslint-enable */
