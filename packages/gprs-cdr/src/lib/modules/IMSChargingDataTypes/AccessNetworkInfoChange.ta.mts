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
 * @summary AccessNetworkInfoChange
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AccessNetworkInfoChange ::= SEQUENCE {
 *    accessNetworkInformation             [0] IMPLICIT OCTET STRING OPTIONAL,
 *    additionalAccessNetworkInformation   [1] IMPLICIT OCTET STRING OPTIONAL,
 *    accessChangeTime                     [2] IMPLICIT OCTET STRING ( SIZE( 9 ) ) OPTIONAL,
 *    cellularNetworkInformation           [3] IMPLICIT OCTET STRING OPTIONAL}
 * ```
 * 
 * @class
 */
export
class AccessNetworkInfoChange {
    /**
     * @summary `accessNetworkInformation`.
     * @public
     * @readonly
     */
    readonly accessNetworkInformation: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `additionalAccessNetworkInformation`.
     * @public
     * @readonly
     */
    readonly additionalAccessNetworkInformation: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `accessChangeTime`.
     * @public
     * @readonly
     */
    readonly accessChangeTime: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `cellularNetworkInformation`.
     * @public
     * @readonly
     */
    readonly cellularNetworkInformation: OPTIONAL<OCTET_STRING>;

    constructor (
        accessNetworkInformation: OPTIONAL<OCTET_STRING>,
        additionalAccessNetworkInformation: OPTIONAL<OCTET_STRING>,
        accessChangeTime: OPTIONAL<OCTET_STRING>,
        cellularNetworkInformation: OPTIONAL<OCTET_STRING>
    ) {
        this.accessNetworkInformation = accessNetworkInformation;
        this.additionalAccessNetworkInformation = additionalAccessNetworkInformation;
        this.accessChangeTime = accessChangeTime;
        this.cellularNetworkInformation = cellularNetworkInformation;
    
        if (this.accessChangeTime !== undefined && (this.accessChangeTime.length !== 9)) {
            throw new ASN1SizeError("AccessNetworkInfoChange.accessChangeTime violates SIZE constraint");
        }
    }

    /**
     * @summary Restructures an object into a AccessNetworkInfoChange
     * @description
     * 
     * This takes an `object` and converts it to a `AccessNetworkInfoChange`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AccessNetworkInfoChange`.
     * @returns {AccessNetworkInfoChange}
     */
    public static _from_object (_o: { [_K in keyof (AccessNetworkInfoChange)]: (AccessNetworkInfoChange)[_K] }): AccessNetworkInfoChange {
        return new AccessNetworkInfoChange(_o.accessNetworkInformation, _o.additionalAccessNetworkInformation, _o.accessChangeTime, _o.cellularNetworkInformation);
    }


}

/**
 * @summary The Leading Root Component Types of AccessNetworkInfoChange
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_AccessNetworkInfoChange: $.ComponentSpec[] = [
    new $.ComponentSpec("accessNetworkInformation", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("additionalAccessNetworkInformation", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("accessChangeTime", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("cellularNetworkInformation", true, $.hasTag(_TagClass.context, 3))
];

/**
 * @summary The Trailing Root Component Types of AccessNetworkInfoChange
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_AccessNetworkInfoChange: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of AccessNetworkInfoChange
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_AccessNetworkInfoChange: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_AccessNetworkInfoChange: $.ASN1Decoder<AccessNetworkInfoChange> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AccessNetworkInfoChange
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AccessNetworkInfoChange (el: _Element): AccessNetworkInfoChange {
    if (!_cached_decoder_for_AccessNetworkInfoChange) { _cached_decoder_for_AccessNetworkInfoChange = function (el: _Element): AccessNetworkInfoChange {
    let accessNetworkInformation: OPTIONAL<OCTET_STRING>;
    let additionalAccessNetworkInformation: OPTIONAL<OCTET_STRING>;
    let accessChangeTime: OPTIONAL<OCTET_STRING>;
    let cellularNetworkInformation: OPTIONAL<OCTET_STRING>;
    const callbacks: $.DecodingMap = {
        "accessNetworkInformation": (_el: _Element): void => { accessNetworkInformation = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "additionalAccessNetworkInformation": (_el: _Element): void => { additionalAccessNetworkInformation = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "accessChangeTime": (_el: _Element): void => { accessChangeTime = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "cellularNetworkInformation": (_el: _Element): void => { cellularNetworkInformation = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_AccessNetworkInfoChange,
        _extension_additions_list_spec_for_AccessNetworkInfoChange,
        _root_component_type_list_2_spec_for_AccessNetworkInfoChange,
        undefined,
    );
    return new AccessNetworkInfoChange(
        accessNetworkInformation,
        additionalAccessNetworkInformation,
        accessChangeTime,
        cellularNetworkInformation
    );
}; }
    return _cached_decoder_for_AccessNetworkInfoChange(el);
}

let _cached_encoder_for_AccessNetworkInfoChange: $.ASN1Encoder<AccessNetworkInfoChange> | null = null;

/**
 * @summary Encodes a(n) AccessNetworkInfoChange into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AccessNetworkInfoChange, encoded as an ASN.1 Element.
 */
export
function _encode_AccessNetworkInfoChange (value: AccessNetworkInfoChange, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AccessNetworkInfoChange) { _cached_encoder_for_AccessNetworkInfoChange = function (value: AccessNetworkInfoChange, _elGetter: $.ASN1Encoder<AccessNetworkInfoChange>): _Element {
    const _components: _Element[] = [];
    if (value.accessNetworkInformation !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 0, () => $._encodeOctetString, $.BER)(value.accessNetworkInformation, $.BER));
    }
    if (value.additionalAccessNetworkInformation !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => $._encodeOctetString, $.BER)(value.additionalAccessNetworkInformation, $.BER));
    }
    if (value.accessChangeTime !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => $._encodeOctetString, $.BER)(value.accessChangeTime, $.BER));
    }
    if (value.cellularNetworkInformation !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => $._encodeOctetString, $.BER)(value.cellularNetworkInformation, $.BER));
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_AccessNetworkInfoChange(value, elGetter);
}


/* eslint-enable */
