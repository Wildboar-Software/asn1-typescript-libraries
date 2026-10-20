/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    GeneralizedTime,
    INTEGER,
    OCTET_STRING,
    OPTIONAL
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary TSChangeover
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TSChangeover ::= SEQUENCE {
 *    newActiveTS      [0] IMPLICIT INTEGER,
 *    newStandbyTS     [1] IMPLICIT INTEGER,
 *    changeoverTime   [2] IMPLICIT GeneralizedTime OPTIONAL,
 *    authkey          [3] IMPLICIT OCTET STRING OPTIONAL,
 *    checksum         [4] IMPLICIT OCTET STRING OPTIONAL,
 *    versionNumber    [5] IMPLICIT OCTET STRING OPTIONAL}
 * ```
 * 
 * @class
 */
export
class TSChangeover {
    /**
     * @summary `newActiveTS`.
     * @public
     * @readonly
     */
    readonly newActiveTS: INTEGER;
    /**
     * @summary `newStandbyTS`.
     * @public
     * @readonly
     */
    readonly newStandbyTS: INTEGER;
    /**
     * @summary `changeoverTime`.
     * @public
     * @readonly
     */
    readonly changeoverTime: OPTIONAL<GeneralizedTime>;
    /**
     * @summary `authkey`.
     * @public
     * @readonly
     */
    readonly authkey: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `checksum`.
     * @public
     * @readonly
     */
    readonly checksum: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `versionNumber`.
     * @public
     * @readonly
     */
    readonly versionNumber: OPTIONAL<OCTET_STRING>;

    constructor (
        newActiveTS: INTEGER,
        newStandbyTS: INTEGER,
        changeoverTime: OPTIONAL<GeneralizedTime>,
        authkey: OPTIONAL<OCTET_STRING>,
        checksum: OPTIONAL<OCTET_STRING>,
        versionNumber: OPTIONAL<OCTET_STRING>
    ) {
        this.newActiveTS = newActiveTS;
        this.newStandbyTS = newStandbyTS;
        this.changeoverTime = changeoverTime;
        this.authkey = authkey;
        this.checksum = checksum;
        this.versionNumber = versionNumber;
    }

    /**
     * @summary Restructures an object into a TSChangeover
     * @description
     * 
     * This takes an `object` and converts it to a `TSChangeover`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `TSChangeover`.
     * @returns {TSChangeover}
     */
    public static _from_object (_o: { [_K in keyof (TSChangeover)]: (TSChangeover)[_K] }): TSChangeover {
        return new TSChangeover(_o.newActiveTS, _o.newStandbyTS, _o.changeoverTime, _o.authkey, _o.checksum, _o.versionNumber);
    }


}

/**
 * @summary The Leading Root Component Types of TSChangeover
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_TSChangeover: $.ComponentSpec[] = [
    new $.ComponentSpec("newActiveTS", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("newStandbyTS", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("changeoverTime", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("authkey", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("checksum", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("versionNumber", true, $.hasTag(_TagClass.context, 5))
];

/**
 * @summary The Trailing Root Component Types of TSChangeover
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_TSChangeover: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of TSChangeover
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_TSChangeover: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_TSChangeover: $.ASN1Decoder<TSChangeover> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TSChangeover
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_TSChangeover (el: _Element): TSChangeover {
    if (!_cached_decoder_for_TSChangeover) { _cached_decoder_for_TSChangeover = function (el: _Element): TSChangeover {
    let newActiveTS!: INTEGER;
    let newStandbyTS!: INTEGER;
    let changeoverTime: OPTIONAL<GeneralizedTime>;
    let authkey: OPTIONAL<OCTET_STRING>;
    let checksum: OPTIONAL<OCTET_STRING>;
    let versionNumber: OPTIONAL<OCTET_STRING>;
    const callbacks: $.DecodingMap = {
        "newActiveTS": (_el: _Element): void => { newActiveTS = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "newStandbyTS": (_el: _Element): void => { newStandbyTS = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "changeoverTime": (_el: _Element): void => { changeoverTime = $._decode_implicit<GeneralizedTime>(() => $._decodeGeneralizedTime)(_el); },
        "authkey": (_el: _Element): void => { authkey = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "checksum": (_el: _Element): void => { checksum = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "versionNumber": (_el: _Element): void => { versionNumber = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_TSChangeover,
        _extension_additions_list_spec_for_TSChangeover,
        _root_component_type_list_2_spec_for_TSChangeover,
        undefined,
    );
    return new TSChangeover(
        newActiveTS,
        newStandbyTS,
        changeoverTime,
        authkey,
        checksum,
        versionNumber
    );
}; }
    return _cached_decoder_for_TSChangeover(el);
}

let _cached_encoder_for_TSChangeover: $.ASN1Encoder<TSChangeover> | null = null;

/**
 * @summary Encodes a(n) TSChangeover into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TSChangeover, encoded as an ASN.1 Element.
 */
export
function _encode_TSChangeover (value: TSChangeover, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_TSChangeover) { _cached_encoder_for_TSChangeover = function (value: TSChangeover, _elGetter: $.ASN1Encoder<TSChangeover>): _Element {
    const _components: _Element[] = [];
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => $._encodeInteger, $.BER)(value.newActiveTS, $.BER));
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeInteger, $.BER)(value.newStandbyTS, $.BER));
    if (value.changeoverTime !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => $._encodeGeneralizedTime, $.BER)(value.changeoverTime, $.BER));
    }
    if (value.authkey !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => $._encodeOctetString, $.BER)(value.authkey, $.BER));
    }
    if (value.checksum !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 4, () => $._encodeOctetString, $.BER)(value.checksum, $.BER));
    }
    if (value.versionNumber !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 5, () => $._encodeOctetString, $.BER)(value.versionNumber, $.BER));
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_TSChangeover(value, elGetter);
}


/* eslint-enable */
