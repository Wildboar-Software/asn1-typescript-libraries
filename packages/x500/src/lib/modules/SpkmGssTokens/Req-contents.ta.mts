/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    BIT_STRING,
    INTEGER,
    OCTET_STRING,
    OPTIONAL,
    UTCTime,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    Validity,
    _decode_Validity,
    _encode_Validity,
} from "../AuthenticationFramework/Validity.ta.mjs";
import {
    Name,
    _decode_Name,
    _encode_Name,
} from "../InformationFramework/Name.ta.mjs";
import {
    Context_Data,
    _decode_Context_Data,
    _encode_Context_Data,
} from "../SpkmGssTokens/Context-Data.ta.mjs";
import {
    Key_Estb_Algs,
    _decode_Key_Estb_Algs,
    _encode_Key_Estb_Algs,
} from "../SpkmGssTokens/Key-Estb-Algs.ta.mjs";
import {
    Random_Integer,
    _decode_Random_Integer,
    _encode_Random_Integer,
} from "../SpkmGssTokens/Random-Integer.ta.mjs";
/**
 * @summary Req_contents
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Req-contents ::= SEQUENCE {
 *   tok-id        INTEGER(256), -- shall contain 0100 (hex)
 *   context-id    Random-Integer,
 *   pvno          BIT STRING,
 *   timestamp     UTCTime OPTIONAL, -- mandatory for SPKM-2
 *   randSrc       Random-Integer,
 *   targ-name     Name,
 *   src-name      [0]  Name OPTIONAL,
 *   req-data      Context-Data,
 *   validity      [1]  Validity OPTIONAL,
 *   key-estb-set  Key-Estb-Algs,
 *   key-estb-req  BIT STRING OPTIONAL,
 *   key-src-bind  OCTET STRING OPTIONAL
 *   -- This field must be present for the case of SPKM-2
 *   -- unilateral authen. if the K-ALG in use does not provide
 *   -- such a binding (but is optional for all other cases).
 *   -- The octet string holds the result of applying the
 *   -- mandatory hashing procedure (in MANDATORY I-ALG;
 *   -- see Section 2.1) as follows:  MD5(src || context_key),
 *   -- where "src" is the DER-encoded octets of src-name,
 *   -- "context-key" is the symmetric key (i.e., the
 *   -- unprotected version of what is transmitted in
 *   -- key-estb-req), and "||" is the concatenation operation.
 * }
 * ```
 *
 */
export class Req_contents {
    constructor(
        /**
         * @summary `tok_id`.
         * @public
         * @readonly
         */
        readonly tok_id: INTEGER,
        /**
         * @summary `context_id`.
         * @public
         * @readonly
         */
        readonly context_id: Random_Integer,
        /**
         * @summary `pvno`.
         * @public
         * @readonly
         */
        readonly pvno: BIT_STRING,
        /**
         * @summary `timestamp`.
         * @public
         * @readonly
         */
        readonly timestamp: OPTIONAL<UTCTime>,
        /**
         * @summary `randSrc`.
         * @public
         * @readonly
         */
        readonly randSrc: Random_Integer,
        /**
         * @summary `targ_name`.
         * @public
         * @readonly
         */
        readonly targ_name: Name,
        /**
         * @summary `src_name`.
         * @public
         * @readonly
         */
        readonly src_name: OPTIONAL<Name>,
        /**
         * @summary `req_data`.
         * @public
         * @readonly
         */
        readonly req_data: Context_Data,
        /**
         * @summary `validity`.
         * @public
         * @readonly
         */
        readonly validity: OPTIONAL<Validity>,
        /**
         * @summary `key_estb_set`.
         * @public
         * @readonly
         */
        readonly key_estb_set: Key_Estb_Algs,
        /**
         * @summary `key_estb_req`.
         * @public
         * @readonly
         */
        readonly key_estb_req: OPTIONAL<BIT_STRING>,
        /**
         * @summary `key_src_bind`.
         * @public
         * @readonly
         */
        readonly key_src_bind: OPTIONAL<OCTET_STRING>
    ) {}

    /**
     * @summary Restructures an object into a Req_contents
     * @description
     *
     * This takes an `object` and converts it to a `Req_contents`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Req_contents`.
     * @returns {Req_contents}
     */
    public static _from_object(
        _o: { [_K in keyof Req_contents]: Req_contents[_K] }
    ): Req_contents {
        return new Req_contents(
            _o.tok_id,
            _o.context_id,
            _o.pvno,
            _o.timestamp,
            _o.randSrc,
            _o.targ_name,
            _o.src_name,
            _o.req_data,
            _o.validity,
            _o.key_estb_set,
            _o.key_estb_req,
            _o.key_src_bind
        );
    }
}

/**
 * @summary The Leading Root Component Types of Req_contents
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_Req_contents: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "tok-id",
        false,
        $.hasTag(_TagClass.universal, 2)
    ),
    new $.ComponentSpec(
        "context-id",
        false,
        $.hasTag(_TagClass.universal, 3)
    ),
    new $.ComponentSpec(
        "pvno",
        false,
        $.hasTag(_TagClass.universal, 3)
    ),
    new $.ComponentSpec(
        "timestamp",
        true,
        $.hasTag(_TagClass.universal, 23)
    ),
    new $.ComponentSpec(
        "randSrc",
        false,
        $.hasTag(_TagClass.universal, 3)
    ),
    new $.ComponentSpec("targ-name", false, $.hasAnyTag),
    new $.ComponentSpec(
        "src-name",
        true,
        $.hasTag(_TagClass.context, 0)
    ),
    new $.ComponentSpec(
        "req-data",
        false,
        $.hasTag(_TagClass.universal, 16)
    ),
    new $.ComponentSpec(
        "validity",
        true,
        $.hasTag(_TagClass.context, 1)
    ),
    new $.ComponentSpec(
        "key-estb-set",
        false,
        $.hasTag(_TagClass.universal, 16)
    ),
    new $.ComponentSpec(
        "key-estb-req",
        true,
        $.hasTag(_TagClass.universal, 3)
    ),
    new $.ComponentSpec(
        "key-src-bind",
        true,
        $.hasTag(_TagClass.universal, 4)
    ),
];

/**
 * @summary The Trailing Root Component Types of Req_contents
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_Req_contents: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of Req_contents
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_Req_contents: $.ComponentSpec[] = [];

let _cached_decoder_for_Req_contents: $.ASN1Decoder<Req_contents> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Req_contents
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Req_contents} The decoded data structure.
 */
export function _decode_Req_contents(el: _Element): Req_contents {
    if (!_cached_decoder_for_Req_contents) {
        _cached_decoder_for_Req_contents = function (
            el: _Element
        ): Req_contents {
            let tok_id!: INTEGER;
            let context_id!: Random_Integer;
            let pvno!: BIT_STRING;
            let timestamp: OPTIONAL<UTCTime>;
            let randSrc!: Random_Integer;
            let targ_name!: Name;
            let src_name: OPTIONAL<Name>;
            let req_data!: Context_Data;
            let validity: OPTIONAL<Validity>;
            let key_estb_set!: Key_Estb_Algs;
            let key_estb_req: OPTIONAL<BIT_STRING>;
            let key_src_bind: OPTIONAL<OCTET_STRING>;
            const callbacks: $.DecodingMap = {
                "tok-id": (_el: _Element): void => {
                    tok_id = $._decodeInteger(_el);
                },
                "context-id": (_el: _Element): void => {
                    context_id = _decode_Random_Integer(_el);
                },
                pvno: (_el: _Element): void => {
                    pvno = $._decodeBitString(_el);
                },
                timestamp: (_el: _Element): void => {
                    timestamp = $._decodeUTCTime(_el);
                },
                randSrc: (_el: _Element): void => {
                    randSrc = _decode_Random_Integer(_el);
                },
                "targ-name": (_el: _Element): void => {
                    targ_name = _decode_Name(_el);
                },
                "src-name": (_el: _Element): void => {
                    src_name = $._decode_explicit<Name>(() => _decode_Name)(
                        _el
                    );
                },
                "req-data": (_el: _Element): void => {
                    req_data = _decode_Context_Data(_el);
                },
                validity: (_el: _Element): void => {
                    validity = $._decode_implicit<Validity>(
                        () => _decode_Validity
                    )(_el);
                },
                "key-estb-set": (_el: _Element): void => {
                    key_estb_set = _decode_Key_Estb_Algs(_el);
                },
                "key-estb-req": (_el: _Element): void => {
                    key_estb_req = $._decodeBitString(_el);
                },
                "key-src-bind": (_el: _Element): void => {
                    key_src_bind = $._decodeOctetString(_el);
                },
            };
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_Req_contents,
                _extension_additions_list_spec_for_Req_contents,
                _root_component_type_list_2_spec_for_Req_contents,
                undefined
            );
            return new Req_contents(
                tok_id,
                context_id,
                pvno,
                timestamp,
                randSrc,
                targ_name,
                src_name,
                req_data,
                validity,
                key_estb_set,
                key_estb_req,
                key_src_bind
            );
        };
    }
    return _cached_decoder_for_Req_contents(el);
}

let _cached_encoder_for_Req_contents: $.ASN1Encoder<Req_contents> | null = null;

/**
 * @summary Encodes a(n) Req_contents into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Req_contents, encoded as an ASN.1 Element.
 */
export function _encode_Req_contents(
    value: Req_contents,
    elGetter: $.ASN1Encoder<Req_contents>
): _Element {
    if (!_cached_encoder_for_Req_contents) {
        _cached_encoder_for_Req_contents = function (
            value: Req_contents        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ $._encodeInteger(value.tok_id, $.DER),
                        /* REQUIRED   */ _encode_Random_Integer(
                            value.context_id,
                            $.DER
                        ),
                        /* REQUIRED   */ $._encodeBitString(value.pvno, $.DER),
                        /* IF_ABSENT  */ value.timestamp === undefined
                            ? undefined
                            : $._encodeUTCTime(value.timestamp, $.DER),
                        /* REQUIRED   */ _encode_Random_Integer(
                            value.randSrc,
                            $.DER
                        ),
                        /* REQUIRED   */ _encode_Name(value.targ_name, $.DER),
                        /* IF_ABSENT  */ value.src_name === undefined
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  0,
                                  () => _encode_Name,
                                  $.DER
                              )(value.src_name, $.DER),
                        /* REQUIRED   */ _encode_Context_Data(
                            value.req_data,
                            $.DER
                        ),
                        /* IF_ABSENT  */ value.validity === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  1,
                                  () => _encode_Validity,
                                  $.DER
                              )(value.validity, $.DER),
                        /* REQUIRED   */ _encode_Key_Estb_Algs(
                            value.key_estb_set,
                            $.DER
                        ),
                        /* IF_ABSENT  */ value.key_estb_req === undefined
                            ? undefined
                            : $._encodeBitString(value.key_estb_req, $.DER),
                        /* IF_ABSENT  */ value.key_src_bind === undefined
                            ? undefined
                            : $._encodeOctetString(value.key_src_bind, $.DER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.DER
            );
        };
    }
    return _cached_encoder_for_Req_contents(value, elGetter);
}


/* eslint-enable */
